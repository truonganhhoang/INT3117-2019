context('Giao bai tap', () => {

    beforeEach( () => {
        cy.visit('https://hoclieu.sachmem.vn')
        cy.contains('Đăng nhập').click()
        cy.get('#user_email').type('vmhieu17@gmail.com')
        cy.get('#user_password').type('12345678').type('{enter}')
        cy.url().should('include', 'https://hoclieu.sachmem.vn')
        cy.wait(2000);
        cy.visit('https://hoclieu.sachmem.vn')
    })

    it ('HL-GBT_44', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var so_lan_lam_lai = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input'
        cy.get(so_lan_lam_lai).should('be.empty')
    })

    it ('HL-GBT_47.1', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var hour_value = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(2) > div > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(1) > input'
        cy.get(hour_value).clear().type('30')
        var tao_button = '#createAssignmentModal > div > div > form > div.modal-footer > input'
        cy.get(tao_button).click()
        cy.contains('Trường này không được để trống').should('exist')
        cy.contains('Giao bài tập thành công').should('not.exist')
    })

    it ('HL-GBT_47.2', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var minute_value = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(2) > div > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(3) > input'
        cy.get(minute_value).clear().type('61')
        var tao_button = '#createAssignmentModal > div > div > form > div.modal-footer > input'
        cy.get(tao_button).click()
        cy.contains('Trường này không được để trống').should('exist')
        cy.contains('Giao bài tập thành công').should('not.exist')
    })

    it ('HL-GBT_47.3', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var date_value = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(1) > input'
        cy.get(date_value).clear().type('32/13/2019')
        var tao_button = '#createAssignmentModal > div > div > form > div.modal-footer > input'
        cy.get(tao_button).click()
        cy.contains('Trường này không được để trống').should('exist')
        cy.contains('Giao bài tập thành công').should('not.exist')
    })

    it ('HL-GBT_57', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var ngay_bat_dau = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(1) > input'
        cy.get(ngay_bat_dau).clear({force: true}).type('20/04/2019')
        var ngay_ket_thuc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(3) > input'
        cy.get(ngay_ket_thuc).clear({force: true}).type('19/04/2019')
        var tao_button = '#createAssignmentModal > div > div > form > div.modal-footer > input'
        cy.get(tao_button).click()
        cy.contains('Thời gian bắt đầu lớn hơn thời gian kết thúc').should('exist')
        cy.contains('Giao bài tập thành công').should('not.exist')
    })

    it ('HL-GBT_66', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var ngay_bat_dau = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(1) > input'
        cy.get(ngay_bat_dau).clear({force: true}).type('20/04/2019')
        var ngay_ket_thuc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(3) > input'
        cy.get(ngay_ket_thuc).clear({force: true}).type('19/04/2019')
        var tao_button = '#createAssignmentModal > div > div > form > div.modal-footer > input'
        cy.get(tao_button).click()
        cy.contains('Thời gian bắt đầu lớn hơn thời gian kết thúc').should('exist')
        cy.contains('Giao bài tập thành công').should('not.exist')
    })

    it ('HL-GBT_79', () => {
        cy.contains('Lớp 12').click()
        cy.wait(2000)
        cy.contains('Hướng dẫn ôn tập kì thi THPT Quốc gia năm học 2016-2017 môn Tiếng Anh').click()
        cy.wait(2000)
        var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
        cy.get(giao_bai_button).click()
        cy.wait(2000)
        var ngay_bat_dau = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(1) > input'
        cy.get(ngay_bat_dau).clear({force: true}).type('20/04/2019')
        var ngay_ket_thuc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(10) > div:nth-child(3) > input'
        cy.get(ngay_ket_thuc).clear({force: true}).type('19/04/2019')
        var tao_button = '#createAssignmentModal > div > div > form > div.modal-footer > input'
        cy.get(tao_button).click()
        cy.contains('Thời gian bắt đầu lớn hơn thời gian kết thúc').should('exist')
        cy.contains('Giao bài tập thành công').should('not.exist')
    })
})