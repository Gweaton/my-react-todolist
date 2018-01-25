/* global it, expect, describe */
const expect = require('chai').expect;

describe('TodoList App', () => {
    it('Should load with the right title', () => {
        browser.url('http://localhost:3000/');
        let actualTitle;

        setTimeout(() => {
            actualTitle = browser.getTitle();
            expect(actualTitle).to.eql('Todo List');
        }, 1000);

    });
});