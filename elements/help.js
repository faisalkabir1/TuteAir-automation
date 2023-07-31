import { Selector, t } from 'testcafe';
class Help{
    constructor() {
    this.HelpBtn = Selector('.be_tutor').withExactText('Help');

    }
    async HelpMethod(){
        await t.click(this.HelpBtn);
    }

}
export default Help;