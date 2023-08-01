import { Selector } from 'testcafe'
import Login from './elements/login';
import Help from './elements/help';
import AddNewSub from './elements/addnewsubject';
const login = new Login();
const help = new Help();
const addNewSub = new AddNewSub();
fixture`TuteAir Test`
    .page`https://dev-tuteair-frontend-app-service.azurewebsites.net/`

const email = 'fkkabir70@gmail.com';
const pass = 'abcd@1234';

test("Log in test", async t => {
    await login.LoginMethod(email, pass);

})

test("Getting Help", async t => {
    await help.HelpMethodTutor();
})

test.only("Login and Add Tuition", async t => {
    await login.LoginMethod(email, pass);


    await addNewSub.performActions();

})