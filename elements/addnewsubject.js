import { Selector, t } from 'testcafe';

class AddNewSub {
    constructor() {

        this.tutorAccountLink = Selector('.sidebar-list a.sidebar-link.sidebar-title').withText('Tutor Account');
        this.addTuitionButton = Selector('.u-pearl-icon i.icofont.icofont-notebook').parent();
        this.addNew = Selector('#add-new');
        this.subjectCategory = Selector('#react-select-6-placeholder');
        this.optionSelector = Selector('.css-1hwfws3')
    }

    async clickTutorAccountLink() {
        await t.click(this.tutorAccountLink);
        await t.wait(2000);
    }

    async clickAddTuitionButton() {
        await t.click(this.addTuitionButton);
        await t.wait(2000);
    }
    async addNewSubject() {
        await t.click(this.addNew);
        await t.wait(2000);
        await t.click(this.subjectCategory);
        await t.wait(2000);
        await t.click(this.optionSelector);
        await t.wait(2000);
    }

    async performActions() {
        await this.clickTutorAccountLink();
        await this.clickAddTuitionButton();
        await this.addNewSubject();
    }
}

export default AddNewSub;
