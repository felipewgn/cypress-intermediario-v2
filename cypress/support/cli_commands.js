Cypress.Commands.add('cloneViaSSH', project => {
    //Comentei o comando por SSH pois obtive um erro ao executar o comando 'ssh-keygen -R localhost'
    //Usei o git clone por https
    //
    //const domain = Cypress.config('baseUrl').replace('http://', '')    
  
    //cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)

    const domain = Cypress.config('baseUrl')

    cy.exec(`cd cypress/downloads/ && git clone ${domain}/${Cypress.env('user_name')}/${project.name}.git`)  

})
  