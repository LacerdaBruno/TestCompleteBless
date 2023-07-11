var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");

function validaLogin()
{
  var mensagem = Aliases.SIDI.TMessageForm3;
  var logar = Aliases.SIDI.frmSenhaLogon.PanelSenhaLogon.pnlDadosLogin.
  pnlDadosConexaoSenhaLogon.PanelSenhaLogon.pnlDadosUsuarioSenhaLogon;
  
  if (Aliases.SIDI.TMessageForm3.Exists){
   mensagem.OK.Click();  
  }  
  if  (Aliases.SIDI.frmSenhaLogon.Exists){
    logar.btnOk.Click();
  }  
  
}
