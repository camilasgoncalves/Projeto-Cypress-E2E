import {Home} from '../PO/homePO'
import { ApiTesting } from '../PO/apiTestingPO'

const home = new Home()
const apiTesting = new ApiTesting()

describe('API Testing cases', () => {

it('Validate list of items on the API Testing page', () => {
    home.accessWebsite()
    home.accessAPI()
    apiTesting.validateAPITesting()
})

})