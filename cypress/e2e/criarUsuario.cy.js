import { Home } from "../PO/homePO";
import { Login } from "../PO/loginPO";
import { CriarUsuario } from "../PO/criarUsuarioPO";

describe('Criação de Usuário', () => {

const criarUsuario = new CriarUsuario()
const home = new Home()

  it('deve criar um novo usuário', () => {
    home.accessWebsite()
    home.accessLogin()
    criarUsuario.signUp()
  })

 it('deve tentar criar usuário com e-mail existente', () => {
    home.accessWebsite()
    home.accessLogin()
    criarUsuario.invalidSignUp()
  })

})