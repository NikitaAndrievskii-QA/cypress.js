describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://pokemonbattle.ru/'); //заходим на сайт
         cy.get('#k_email').type('USER_LOGIN'); //находим поле логин и вводим верный логин
         cy.get('#k_password').type('USER_PASSWORD');//находим поле пароль и вводим верный пароль
         cy.get('.MuiButton-root').click();//нашли кнопку войти и нажимаем на нее
         cy.wait(2000);
         cy.get('.header_card_trainer').click();//нажимаем на аватар тренера в шапке
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5)').click();//нажимаем смена аватара
         cy.get('.available > button').first().click();//кликаем купить у первого доступного аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');//вводим номер карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');//вводим CVV
         cy.get(':nth-child(1) > .style_1_base_input').type('1226');//вводим срок действия карты
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME NAME')//вводим имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();//нажимаем кнопку оплатить
         cy.get('.style_1_base_input').type('56456')//вводим код из СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();//нажимаем кнопку оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');//проверяем, что Покупка прошла успешно
         cy.get('.payment_status_top_title').should('be.visible');//проверяем видимость сообщения для пользователя

        }) 

})