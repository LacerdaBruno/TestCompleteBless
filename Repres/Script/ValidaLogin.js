var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");

function validaLoginRepres()
{
  var painelLogar = Aliases.REPRES.frmSenhaLogonRepres.PanelLogonRepres;  
 
  if  (Aliases.REPRES.frmSenhaLogonRepres.Exists){
    painelLogar.usuarioLogin.Keys("SYSDBA");
    painelLogar.usuarioSenha.Keys("pmpsyfwr");
    painelLogar.btnOk.Click();
  }  
  
}
module.exports.validaLoginRepres = validaLoginRepres;