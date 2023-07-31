import { Selector } from 'testcafe'
import Login from './elements/login';
import Help from './elements/help';
const login = new Login();
const help = new Help();

fixture`Getting Started`
    .page`https://dev-tuteair-frontend-app-service.azurewebsites.net/`

const email = 'fkkabir70@gmail.com';
const pass = 'abcd@1234';

test("Log in test", async t => {
    await login.LoginMethod(email, pass);

})

test.only("Getting Help", async t => {
    await help.HelpMethod();
})
