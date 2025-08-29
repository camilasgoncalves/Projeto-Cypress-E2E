import {Home} from '../PO/homePO'
import { ApiTesting } from '../PO/apiTestingPO'

const home = new Home()
const apiTesting = new ApiTesting()

describe('API Testing cases', () => {

it('Validate list of items on the API Testing page', () => {
    home.accessWebsite()
    home.accessAPI()
    apiTesting.validateAPITesting('API 1')
    apiTesting.validateAPITesting('API 2')
    apiTesting.validateAPITesting('API 3')
    apiTesting.validateAPITesting('API 4')
    apiTesting.validateAPITesting('API 5')
    apiTesting.validateAPITesting('API 6')
    apiTesting.validateAPITesting('API 7')
    apiTesting.validateAPITesting('API 8')
    apiTesting.validateAPITesting('API 9')
    apiTesting.validateAPITesting('API 10')
    apiTesting.validateAPITesting('API 11')
    apiTesting.validateAPITesting('API 12')
    apiTesting.validateAPITesting('API 13')
    apiTesting.validateAPITesting('API 14')
})

})