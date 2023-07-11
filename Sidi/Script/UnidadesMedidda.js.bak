var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function cadastraUnidadeMedidas(){
  abreTela();
  Principal.clicaNovo(); 
  inserirUnidadeMedida();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela(); 
}

function abreTela() {
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnUnidadesMedida, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadeMedidas,"Unidades de Medida");
}

function inserirUnidadeMedida(){
  
  var gridUnidadeMedida = Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadeMedidas.PageControlUnidadeMedidas.tsPesquisaUnidadeMedidas.PanelGridUnidadeMedidas.dbGridUnidadeMedidas;
  for(i = 0; i < Project.Variables.UnidadeMedidas.RowCount; i++){
  
  gridUnidadeMedida.Keys("[Home]");
  gridUnidadeMedida.Keys("[Right]");
  gridUnidadeMedida.Keys(Project.Variables.UnidadeMedidas.Sigla(i)); 
  gridUnidadeMedida.Keys("[Right]");
  gridUnidadeMedida.Keys(Project.Variables.UnidadeMedidas.Descricao(i));
  gridUnidadeMedida.Keys("[Right]");
  gridUnidadeMedida.Keys("[Right]");
  gridUnidadeMedida.Keys(Project.Variables.UnidadeMedidas.Fator_Conversao(i));
  gridUnidadeMedida.Keys("[Down]");
  
  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadeMedidas.
  PanelBotoes.PanelBotoesUnidadeMedidas.btnConfirma, 'Unidades de Medida');
}


