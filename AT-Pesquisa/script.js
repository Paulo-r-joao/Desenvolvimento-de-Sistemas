document.getElementById("searchButton").addEventListener("click", function() {
    let userId = document.getElementById("userId").value;
    let userInfo = document.getElementById("userInfo");
    let searchSpinner = document.getElementById("searchSpinner");
    let searchButtonText = document.getElementById("searchButtonText");

    // Mostrar spinner
    searchSpinner.style.display = "inline-block";
    searchButtonText.textContent = "Carregando...";

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            // Esconder spinner
            searchSpinner.style.display = "none";
            searchButtonText.textContent = "Buscar";

            // Exibir usuário
            userInfo.innerHTML += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="bi bi-person-circle"></i> ${user.name}</h5>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                        <p class="card-text"><strong>Telefone:</strong> ${user.phone}</p>
                        <p class="card-text"><strong>Empresa:</strong> ${user.company.name}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            searchSpinner.style.display = "none";
            searchButtonText.textContent = "Buscar";
            userInfo.innerHTML += `
                <div class="alert alert-danger">❌ Usuário não encontrado!</div>
            `;
        });
});
document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("userInfo").innerHTML = "";
});