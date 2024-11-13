class TestElements {
    number1 = () => cy.get('button').contains('6')
    number2 = () => cy.get('button').contains('2')
    sumBtn = () => cy.get('button').contains('+')
    subBtn = () => cy.get('button').contains('-')
    mulBtn = () => cy.get('button').contains('x')
    divBtn = () => cy.get('button').contains('/')
    equalsBtn = () => cy.get('button').contains('=')
    display = () => cy.get('.display-container > div')
}

const testElements = new TestElements()

describe('Função soma', () => {
    it('Visitar a página', () => {
        cy.visit('/')
    })

    it('Pressionar um número', () => {
        testElements.number1().click()
    })

    it('Pressionar o botão de soma', () => {
        testElements.sumBtn().click()
    })

    it('Pressionar outro número', () => {
        testElements.number2().click()
    })

    it('Pressionar o igual', () => {
        testElements.equalsBtn().click()
    })

    it('Verificar o resultado', () => {
        testElements.display().should('have.text', '8')
    })
})

describe('Função Subtração', () => {
    it('Visitar a página', () => {
        cy.visit('/')
    })

    it('Pressionar um número', () => {
        testElements.number1().click()
    })

    it('Pressionar o botão de subtração', () => {
        testElements.subBtn().click()
    })

    it('Pressionar outro número', () => {
        testElements.number2().click()
    })

    it('Pressionar o igual', () => {
        testElements.equalsBtn().click()
    })

    it('Verificar o resultado', () => {
        testElements.display().should('have.text', '4')
    })
})

describe('Função multiplicação', () => {
    it('Visitar a página', () => {
        cy.visit('/')
    })

    it('Pressionar um número', () => {
        testElements.number1().click()
    })

    it('Pressionar o botão de multiplicação', () => {
        testElements.mulBtn().click()
    })

    it('Pressionar outro número', () => {
        testElements.number2().click()
    })

    it('Pressionar o igual', () => {
        testElements.equalsBtn().click()
    })

    it('Verificar o resultado', () => {
        testElements.display().should('have.text', '12')
    })
})

describe('Função divisão', () => {
    it('Visitar a página', () => {
        cy.visit('/')
    })

    it('Pressionar um número', () => {
        testElements.number1().click()
    })

    it('Pressionar o botão de divisão', () => {
        testElements.divBtn().click()
    })

    it('Pressionar outro número', () => {
        testElements.number2().click()
    })

    it('Pressionar o igual', () => {
        testElements.equalsBtn().click()
    })

    it('Verificar o resultado', () => {
        testElements.display().should('have.text', '3')
    })
})

