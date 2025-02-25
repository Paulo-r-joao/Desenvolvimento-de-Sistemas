document.getElementById("searchButton").addEventListener("click", function() {
    let userId = document.getElementById("userId").value;
    let userInfo = document.getElementById("userInfo");
    let searchSpinner = document.getElementById("searchSpinner");
    let searchButtonText = document.getElementById("searchButtonText");

    // Limpar mensagens anteriores
    userInfo.innerHTML = "";

    // Mostrar spinner
    searchSpinner.style.display = "inline-block";
    searchButtonText.textContent = "Carregando...";

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Usuário não encontrado");
            }
            return response.json();
        })
        .then(user => {
            userInfo.innerHTML = `
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
            userInfo.innerHTML = `<div class="alert alert-danger">❌ ${error.message}</div>`;
        })
        .finally(() => {
            // Esconder spinner independentemente do resultado
            searchSpinner.style.display = "none";
            searchButtonText.textContent = "Buscar";
        });
});

document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("userInfo").innerHTML = "";
});
