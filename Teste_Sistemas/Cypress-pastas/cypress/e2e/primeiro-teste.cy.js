describe('Teste simples no Google', () => {
    it('Acessar o site e fazer login com sucesso', () => {
      cy.visit('http://localhost:8080/PHP-1/Exemplos/login-ajax/')

      cy.title().should('include', 'Login')
  
      cy.get('input[name="login"]').type('teste011')
      cy.get('input[name="senha"]').type('teste011')
  
      cy.get('button[type="submit"]').click()
      cy.contains('Bem‑vindo, teste011!').should('be.visible') 

      cy.get('#sair').click()
      cy.url().should('include', 'login')
      cy.contains('Login').should('be.visible')
      
    })
  })
  