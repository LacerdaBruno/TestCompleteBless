var App = require("App");
var ValidaLogin = require("ValidaLogin");

function TesteCadastros()
{
  try
  {
    App.AbreRepres();
    ValidaLogin.validaLoginRepres();
    
    
    //Cadastros

    
  }
  catch (exception)
  {
    Log.Error("Erro", exception.message);
  }
  finally
  {
    //Video.parar();
  }
}
