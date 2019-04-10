// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/*
describe('Kiem tra dang nhap', function() {

    context('Đăng nhập', function(){
        beforeEach(function(){
            cy.visit('https://hoclieu.sachmem.vn');
        })

        it('Test case đăng nhập thành công', function(){
            cy.contains('Đăng nhập').click();
            cy.get('#user_email').type('vmhieu17@gmail.com'); // type email
            cy.get('#user_password').type('12345678'); // type password
            cy.get('#new_user > div:nth-child(6) > input').click();

            cy.url().should('include', 'https://hoclieu.sachmem.vn');
            cy.wait(2000);
            //cy.get('#userDropdown > span').should('contain', '(user_name)'); // type user_name
        })
    })
})*/

/*
Cypress.Commands.add('login', ({ url, user_name, password }) => {
    cy.visit(url)
    cy.contains('Đăng nhập').click()
    cy.get('#user_email').type(user_name)
    cy.get('#user_password').type(password).type('{enter}')
    cy.url().should('include', 'https://hoclieu.sachmem.vn')
    cy.wait(2000);
});
*/