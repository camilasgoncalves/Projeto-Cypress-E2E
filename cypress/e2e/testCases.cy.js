import { TestCases } from "../PO/testCasesPO";
import {Home} from "../PO/homePO";

const testCases = new TestCases();
const home = new Home();

describe ('Test Cases', () => {

it('Validate list of items on the Test Cases page', () => {
    home.accessWebsite()
    home.acessTestCases()
    testCases.validateTestCases('Test Case 1')
    testCases.validateTestCases('Test Case 2')
    testCases.validateTestCases('Test Case 3')
    testCases.validateTestCases('Test Case 4')
    testCases.validateTestCases('Test Case 5')
    testCases.validateTestCases('Test Case 6')
    testCases.validateTestCases('Test Case 7')
    testCases.validateTestCases('Test Case 8')
    testCases.validateTestCases('Test Case 9')
    testCases.validateTestCases('Test Case 10')
    testCases.validateTestCases('Test Case 11')
    testCases.validateTestCases('Test Case 12')
    testCases.validateTestCases('Test Case 13')
    testCases.validateTestCases('Test Case 14')
    testCases.validateTestCases('Test Case 15')
    testCases.validateTestCases('Test Case 16')
    testCases.validateTestCases('Test Case 17')
    testCases.validateTestCases('Test Case 18')
    testCases.validateTestCases('Test Case 19')
    testCases.validateTestCases('Test Case 20')
    testCases.validateTestCases('Test Case 21')
    testCases.validateTestCases('Test Case 22')
    testCases.validateTestCases('Test Case 23')
    testCases.validateTestCases('Test Case 24')
    testCases.validateTestCases('Test Case 25')
    testCases.validateTestCases('Test Case 26')
})

})