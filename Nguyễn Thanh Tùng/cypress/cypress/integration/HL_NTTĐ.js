context('Nhan tin trao doi', () => {

    beforeEach(() => {
        cy.visit('https://hoclieu.sachmem.vn')
        cy.contains('Đăng nhập').click()
        cy.get('#user_email').type('vmhieu17@gmail.com')
        cy.get('#user_password').type('12345678').type('{enter}')
        cy.url().should('include', 'https://hoclieu.sachmem.vn')
        cy.wait(2000);
        cy.visit('https://hoclieu.sachmem.vn')

        cy.contains('Lớp học của tôi').click()
        cy.wait(2000)
        var lop_hoc_giang_day = 'body > app-root > div.content-bound > div > div > div > app-list-class > p:nth-child(1)'
        cy.get(lop_hoc_giang_day).should('contain', 'Lớp học giảng dạy')
        var lop_dau_tien = 'body > app-root > div.content-bound > div > div > div > app-list-class > ul:nth-child(1) > li:nth-child(1) > div > div:nth-child(1) > a'
        lop_dau_tien = ':nth-child(2) > :nth-child(1) > .row > .col-9 > .text-dark'
        cy.get(lop_dau_tien).click()
        cy.wait(2000)
        cy.contains('Nhắn tin, trao đổi').click()
        cy.wait(2000)
    })

    it ('HL-NTTĐ_6', () => {
        var tim_kiem = '#sidebar-wrapper > :nth-child(1) > .input_search'
        cy.get(tim_kiem).should('be.exist').should('have.attr', 'placeholder', 'Tìm kiếm')
    })

    it ('HL-NTTĐ_9', () => {
        var tim_kiem = '#sidebar-wrapper > :nth-child(1) > .input_search'
        cy.get(tim_kiem).should('be.exist').type('12345').should('have.value', '12345')
    })

    it ('HL-NTTĐ_11', () => {
        var chatbox = '.send-message'
        cy.get(chatbox).should('be.exist').should('have.attr', 'placeholder', 'Gửi tin nhắn')
    })

    it ('HL-NTTĐ_13', () => {
        var chatbox = '.send-message'
        cy.get(chatbox).should('be.exist').type('12345').should('have.value', '12345')
    })

    it ('HL-NTTĐ_14', () => {
        var chatbox = '.send-message'
        cy.get(chatbox).should('be.exist').type('~@!@').should('have.value', '~@!@')
    })
})
