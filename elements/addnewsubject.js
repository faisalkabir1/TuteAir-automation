import { Selector, t } from 'testcafe';

class AddNewSub {
    constructor() {

        this.tutorAccountLink = Selector('.sidebar-list a.sidebar-link.sidebar-title').withText('Tutor Account');
        this.addTuitionButton = Selector('.u-pearl-icon i.icofont.icofont-notebook').parent();
        this.addNew = Selector('#add-new');
    }

    async clickTutorAccountLink() {
        await t.click(this.tutorAccountLink);
        await t.wait(2000);
    }

    async clickAddTuitionButton() {
        await t.click(this.addTuitionButton);
        await t.wait(2000);
    }
    async addNewSubject(){
        await t.click(this.addNew);
    }

    async performActions() {
        await this.clickTutorAccountLink();
        await this.clickAddTuitionButton();
        await this.addNewSubject();
    }
}

export default AddNewSub;
