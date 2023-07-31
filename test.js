import { Selector } from 'testcafe'
import Login from './elements/login';
const login = new Login();

fixture`Getting Started`
    .page`https://dev.tuteair.com/`

const email = 'fkkabir70@gmail.com';
const pass = 'abcd@1234';

test("Log in test", async t => {
    await login.LoginMethod(email, pass);
    //await t.click("#logout2");
})
