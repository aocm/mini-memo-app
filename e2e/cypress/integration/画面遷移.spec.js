describe('画面遷移', () => {
  it('LPから一覧画面へ', () => {
    cy.visit('/')
    expect(cy.contains('MINI-MEMO-APP')).to.exist
    cy.get('#goto-memo-link').click()
    cy.url().should('eq', 'http://localhost:3000/memo')
  })
  
  it('メニュータブ操作', () => {
    cy.visit('/memo')

    cy.get('#menu-tab-new').click()
    cy.url().should('eq', 'http://localhost:3000/memo/new')

    cy.get('#menu-tab-list').click()
    cy.url().should('eq', 'http://localhost:3000/memo')
  })
  
  it('メモ一覧画面', () => {
    cy.intercept(`http://localhost:3000/api/memo/list`,
      { fixture: 'memo-list.json' }).as('list')
    cy.visit('/memo')
    cy.contains('title31').click()
    cy.get('.box-card').dblclick()
    cy.url().should('eq', 'http://localhost:3000/memo/view?id=1')
  })
})