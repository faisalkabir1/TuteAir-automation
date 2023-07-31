import { Selector, t } from 'testcafe';
class Login {
    constructor() {
        this.login = Selector("#be_tutor");
        this.typemail = Selector('input[type="email"].form-control');
        this.typepassw = Selector('input[type="password"][name="login[password]"].form-control');
        this.signinBtn = Selector('button[type="submit"].btn.btn-primary');
    }
    async LoginMethod(email, pass) {
        await t.click(this.login);
        await t.typeText(this.typemail, email);
        await t.typeText(this.typepassw, pass);
        //console.log("username " + username + "pass " + pass);
        await t
            .setNativeDialogHandler(() => true)
            .click(this.signinBtn);
    }
}
export default Login;