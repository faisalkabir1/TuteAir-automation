import { Selector, t } from 'testcafe';

class AddNewSub {
    constructor() {

        this.tutorAccountLink = Selector('.sidebar-list a.sidebar-link.sidebar-title').withText('Tutor Account');
        this.addTuitionButton = Selector('.u-pearl-icon i.icofont.icofont-notebook').parent();
    }

    async clickTutorAccountLink() {
        await t.click(this.tutorAccountLink);
    }

    async clickAddTuitionButton() {
        await t.click(this.addTuitionButton);
    }

    async performActions() {
        await this.clickTutorAccountLink();
        await this.clickAddTuitionButton();
    }
}

export default AddNewSub;
