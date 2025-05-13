describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //заходим на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //находим поле логин и вводим верный логин
         cy.get('#pass').type('iLoveqastudio1');//находим поле пароль и вводим верный пароль
         cy.get('#loginButton').click();//нашли кнопку войти и нажимаем на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяем, что успешно авторизировались
         cy.get('#messageHeader').should('be.visible');// Текст:"Авторизация прошла успешно"виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем, что есть крестик и он виден пользователю
     }) 

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //заходим на сайт
        cy.get('#forgotEmailButton').click(); //нашли кнопку: "Забыли пароль?" и нажимаем
        cy.get('#mailForgot').type('random@mail.ru');//находим полее ввода мэйла и вводим рандомный мэйл
        cy.get('#restoreEmailButton').click();;//нажимаем кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяем, что пароль отправили на мэйл
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем, что есть крестик и он виден пользователю
    }) 
    
    it('Вводим не правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //находим поле логин и вводим верный логин
        cy.get('#pass').type('iLoveqastudio2');//находим поле пароль и вводим не верный пароль
        cy.get('#loginButton').click();//нашли кнопку войти и нажимаем на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяем, что успешно авторизировались
        cy.get('#messageHeader').should('be.visible');// Текст:"Такого логина или пароля нет"виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем, что есть крестик и он виден пользователю

    }) 

    it('Вводим не правильный логин', function () {
        cy.visit('https://login.qa.studio/'); //заходим на сайт
        cy.get('#mail').type('german@dolnikov2.ru'); //находим поле логин и вводим не верный логин
        cy.get('#pass').type('iLoveqastudio1');//находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click();//нашли кнопку войти и нажимаем на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяем, что успешно авторизировались
        cy.get('#messageHeader').should('be.visible');// Текст:"Такого логина или пароля нет"виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем, что есть крестик и он виден пользователю

    }) 

    it('Негативная валидация', function () {
        cy.visit('https://login.qa.studio/'); //заходим на сайт
        cy.get('#mail').type('germandolnikov.ru'); //находим поле логин и вводим верный логин
        cy.get('#pass').type('iLoveqastudio1');//находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click();//нашли кнопку войти и нажимаем на нее
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяем, что получили сообщение с ошибкой валидации
}) 

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //заходим на сайт
        cy.get('#mail').type('GerMan@dolnikov.ru'); //находим поле логин и вводим логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1');//находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click();//нашли кнопку войти и нажимаем на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяем, что успешно авторизировались
        cy.get('#messageHeader').should('be.visible');// Текст:"Авторизация прошла успешно"виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем, что есть крестик и он виден пользователю
}) 


})
