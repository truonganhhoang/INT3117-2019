context('Giao bai tap', () => {
  var time = 1000

  beforeEach( () => {
    cy.login({ url: 'https://hoclieu.sachmem.vn', user_name: 'vmhieu17@gmail.com', password: '12345678' })
    cy.visit('https://hoclieu.sachmem.vn')
  })

  it('HL-GBT_17 (row 30)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 6').click()
    cy.contains('Phiên bản trước').click()
    cy.wait(time);
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).should('not.exist')
  })

  it('HL-GBT_33 (row 51)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var chon_lop_hoc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select'
    cy.get(chon_lop_hoc).click()
    var first_lop_hoc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div.ng-option.ng-option-marked'
    cy.get(first_lop_hoc).click()
    var description = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(2) > input'
    cy.get(description).clear().type('Test; DROP *')
    cy.contains('Tạo').click()
    cy.contains('Giao bài tập thành công').should('exist')
  })

  it('HL-GBT_32 (row 50)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var chon_lop_hoc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select'
    cy.get(chon_lop_hoc).click()
    var first_lop_hoc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div.ng-option.ng-option-marked'
    cy.get(first_lop_hoc).click()
    var description = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(2) > input'
    cy.get(description).clear().type('TabcDEF123@~\\|=')
    cy.contains('Tạo').click()
    cy.contains('Giao bài tập thành công').should('exist')
  })

  it('HL-GBT_88 (row 143)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var chon_lop_hoc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select'
    cy.get(chon_lop_hoc).click()
    var first_lop_hoc = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div.ng-option.ng-option-marked'
    cy.get(first_lop_hoc).click()
    var thoi_gian_lam_bai = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(6) > input'
    cy.get(thoi_gian_lam_bai).clear()
    cy.contains('Tạo').click()
    cy.contains('Giao bài tập thành công').should('not.exist')
  })

  it('HL-GBT_38 (row 57)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var thoi_gian_lam_bai = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(6) > input'
    cy.get(thoi_gian_lam_bai).should('be.empty')
  })

  it('HL-GBT_37 (row 58)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var thoi_gian_lam_bai = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(6) > input'
    cy.get(thoi_gian_lam_bai).type('abc').should('not.have.value', 'abc')
  })

  it('HL-GBT_36 (row 59)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var thoi_gian_lam_bai = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(6) > input'
    cy.get(thoi_gian_lam_bai).type('@@~').should('not.have.value', '@@~')
  })

  it('HL-GBT_37 (row 60)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var thoi_gian_lam_bai = '#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(6) > input'
    cy.get(thoi_gian_lam_bai).type('60').should('have.value', '60')
  })

  it('HL-GBT_87 (row 142)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    var today = new Date()
    var dd = String(today.getDate()-1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var yesterday = dd + '/' + mm + '/' + yyyy;
    var thoi_gian_bat_dau = '#createAssignmentModal > div > div > form > div.modal-body > div.row > div:nth-child(1) > input'
    cy.get(thoi_gian_bat_dau).clear().type(yesterday).type('{enter}')
    var thoi_gian_ket_thuc = '#createAssignmentModal > div > div > form > div.modal-body > div.row > div:nth-child(3) > input'
    cy.get(thoi_gian_ket_thuc).clear().type(yesterday).type('{enter}')
    cy.contains('Tạo').click()
    cy.contains('Thời hạn nhỏ hơn ngày hiện tại').should('exist')
  })

  it('HL-GBT_31 (row 80)', () => {
    cy.visit('https://hoclieu.sachmem.vn')
    cy.contains('Lớp 7').click()
    cy.wait(time)
    var first_book = 'body > app-root > div.content-bound > div > div > div > folder-tree > ul > li:nth-child(2) > div > div > a'
    cy.get(first_book).first().click()
    cy.wait(time)
    var giao_bai_button = 'body > app-root > div.content-bound > div > div > div > question > div > div.main.main-closed > div > div > app-preview-list-question > div > div > div:nth-child(1) > div.pull-right'
    cy.get(giao_bai_button).click()
    cy.wait(time)
    cy.contains('Tạo').click()
    cy.contains('Trường này không được để trống').should('exist')
  })
})
