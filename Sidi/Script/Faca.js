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
  
  for(i = 0; i < Project.Variables.Facas.RowCount; i++){
  var Descricao = Project.Variables.Facas.descricao(i);
  var Valor = Project.Variables.Facas.valor(i);
  var Grade = Project.Variables.Facas.grade(i);
  var Refencia = Project.Variables.Facas.referencia(i);
  var Quantidade = Project.Variables.Facas.quantidade(i);
  var Balancin = Project.Variables.Facas.balancin(i);
  
  painelCadastroFaca.DESCRICAO.Keys(Descricao);
  painelCadastroFaca.VALOR.Keys(Valor);
  Principal.insereDropDownValue(painelCadastroFaca.GRADE, Grade);
  painelCadastroFaca.REFERENCIA.Keys(Refencia);
  painelCadastroFaca.QTE_FACA.Keys(Quantidade);
  Principal.insereDropDownValue(painelCadastroFaca.BALANCIN, Balancin);
  
  }
  
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