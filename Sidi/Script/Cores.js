var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function insereCor()
{
  abreTela(); 
  Principal.clicaNovo(); 
  insereDescCor();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela();
}

function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnCores, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmCores,"Cores");
}

function insereDescCor(cor){
 var dbGrid = Aliases.SIDI.frmPrincipal.MDIClient.frmCores.PageControlCores.tsPesquisaCores.PanelGridCores.dbGridPesquisaCores;

 for (var i = 0; i < Project.Variables.CorMateriais.RowCount; i++){
    var cor = Project.Variables.CorMateriais.cor(i); 
    dbGrid.Keys("[Home]");
    dbGrid.Keys("[Right]");
    dbGrid.Keys(cor);   
    dbGrid.Keys("[Down]");
 }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmCores.Panel1.PanelBotoes.btnConfirma, 'Cores');
}

module.exports.insereCor = insereCor;
module.exports.abreTela = abreTela;
module.exports.insereDescCor = insereDescCor;
module.exports.confirma = confirma;