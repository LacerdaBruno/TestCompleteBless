var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function cadastrarClassificacaoFiscal(){
  abreTela();
  Principal.clicaNovo(); 
  inserirClassificacaoFiscal();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela(); 
}

function abreTela() {
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnClassificacaoFiscal, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmClassificacaoFiscal,"Classificações Fiscais");
}

function inserirClassificacaoFiscal(){
  
  var gridClassificacaoFiscal = Aliases.SIDI.frmPrincipal.MDIClient.frmClassificacaoFiscal.
  PageControlClassificacaoFiscal.tsPesquisaClassificacaoFiscal.PanelGridClassificacaoFiscal.dbGridClassificacaoFiscal;
       
  for(i = 0; i < Project.Variables.ClassificacaoFiscal.RowCount; i++){
  
  gridClassificacaoFiscal.Keys("[Home]");
  gridClassificacaoFiscal.Keys(Project.Variables.ClassificacaoFiscal.Codigo(i)); 
  gridClassificacaoFiscal.Keys("[Right]");
  gridClassificacaoFiscal.Keys(Project.Variables.ClassificacaoFiscal.Descricao(i));
  gridClassificacaoFiscal.Keys("[Down]");
  
  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmClassificacaoFiscal.
  PanelBotoes.PanelBotoesClassificacaoFiscal.btnConfirma, 'Classificações Fiscais');
}