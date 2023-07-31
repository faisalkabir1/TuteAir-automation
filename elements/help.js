import { Selector, t } from 'testcafe';
class Help {
    constructor() {
        this.HelpBtn = Selector('.be_tutor').withExactText('Help');
        this.searchStudent = Selector('a.nav-link').withText('Search Student');
        this.contactStudent = Selector('a.nav-link').withText('Contact Student');


    }
    async HelpMethod() {
        await t.click(this.HelpBtn);
        await t.wait(3000);
        await t.click(this.searchStudent)
        await t.wait(3000);
    }

}
export default Help;