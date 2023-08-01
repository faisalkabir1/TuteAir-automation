import { Selector, t } from 'testcafe';

class AddNewSub {
    constructor() {

        this.tutorAccountLink = Selector('.sidebar-list a.sidebar-link.sidebar-title').withText('Tutor Account');
        this.addTuitionButton = Selector('.u-pearl-icon i.icofont.icofont-notebook').parent();
        this.addNew = Selector('#add-new');
        this.subjectCategory = Selector('.css-ackcql');
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
        await t.click(this.subjectCategory);
        const options = ['ACADEMIC', 'ANTIQUES & COLLECTIBLES', 'ARCHITECTURE', 'ART', 'ARTS'];

        // Get a random index to select one of the options randomly.
        const randomIndex = Math.floor(Math.random() * options.length);

        const optionSelector = Selector(`input[id^="react-select-"]`).withAttribute('value', options[randomIndex]);

        await t.click(optionSelector);

    }

    async performActions() {
        await this.clickTutorAccountLink();
        await this.clickAddTuitionButton();
        await this.addNewSubject();
    }
}

export default AddNewSub;
