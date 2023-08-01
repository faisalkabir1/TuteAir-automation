import { Selector, t } from 'testcafe';
class Login {
    constructor() {
        this.Loginbtn = Selector('.be_tutor').withExactText('Login');
        this.typemail = Selector('input[type="email"].form-control');
        this.typepassw = Selector('input[type="password"][name="login[password]"].form-control');
        this.signinBtn = Selector('button[type="submit"].btn.btn-primary');
    }
    async LoginMethod(email, pass) {
        await t.click(this.Loginbtn);
        await t.typeText(this.typemail, email);
        await t.typeText(this.typepassw, pass);
        //console.log("username " + username + "pass " + pass);
        await t
            .setNativeDialogHandler(() => true)
            .click(this.signinBtn);
        // Wait for 3 seconds
        await t.wait(3000);
    }
}
export default Login;