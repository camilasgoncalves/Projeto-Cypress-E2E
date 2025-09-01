import { TestCases } from "../PO/testCasesPO";
import {Home} from "../PO/homePO";

const testCases = new TestCases();
const home = new Home();

describe ('Test Cases', () => {

it('Validate list of items on the Test Cases page', () => {
    home.accessWebsite()
    home.acessTestCases()
    testCases.validateTestCases()
})

})