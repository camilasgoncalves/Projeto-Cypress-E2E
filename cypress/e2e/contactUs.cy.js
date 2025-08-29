import { Home } from "../PO/homePO";
import { ContactUs } from "../PO/contactUsPO";

describe('Contact Us', () => {

const home = new Home()
const contact = new ContactUs()

  it('deve preencher o formulário em Contact Us', () => {
    home.accessWebsite()
    home.accessContactUs()
    contact.formContactUs()
  })

})