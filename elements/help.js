import { Selector, t } from 'testcafe';
class Help {
    constructor() {
        this.HelpBtn = Selector('.be_tutor').withExactText('Help');
        this.searchStudent = Selector('a.nav-link').withText('Search Student');
        this.contactStudent = Selector('a.nav-link').withText('Contact Student');
        this.createNewTuition = Selector('a.nav-link').withText('Create New Tuition');
        this.updateSetting = Selector('a.nav-link').withText('Update Account Settings');

    }
    async HelpMethodTutor() {
        await t.click(this.HelpBtn);
        await t.wait(3000);
        await t.click(this.searchStudent);
        await t.wait(3000);
        await t.click(this.contactStudent);
        await t.wait(3000);
        await t.click(this.createNewTuition);
        await t.wait(3000);
        await t.click(this.updateSetting);
        await t.wait(3000);

    }

}
export default Help;