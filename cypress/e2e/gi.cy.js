beforeEach('Visit localhost', () => {
    cy.visit('http://127.0.0.1:8888');
});

describe('first test', () => {
    //test 1
    it('visit localhost', () => {
        cy.focused().should('have.class', 'new-todo')
    });

    //test 2
    it('accesses input', () => {
        cy.get('.new-todo').type('cook').should('have.value', 'cook')
    });

    //test 3
    it('visits /completed page', () => {
        cy.visit('http://127.0.0.1:8888/#/completed')
        cy.url().should('include', '/completed')
    });

    //test 4
    it('link should match', () => {
        cy.url().should('equal', 'http://127.0.0.1:8888/#/')
    });

    //test 5
    it('clicks the All button after a task has been created', ()=> {
        cy.get('.new-todo').type('clean{enter}')
        cy.contains('All').click()
    });
});