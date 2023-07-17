var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

var painelCadastroFaca = Aliases.SIDI.frmPrincipal.MDIClient.frmFaca.PageControlFaca.tsDadosFaca.pnlCadastros;


function cadastraFaca()
{
  abreTela();  
  Principal.clicaNovo();  
  confirma();
  Principal.clicaEditar();
  confirma();  
  Principal.fechaTela();
}

function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnFormas,
  Aliases.SIDI.frmPrincipal.MDIClient.frmForma,
  'Faca');
}

 






function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmForma.Panel1.PanelBotoes.btnConfirma, "Forma");
}

module.exports.abreTela = abreTela;
module.exports.confirma = confirma;
module.exports.cadastraForma = cadastraFaca;