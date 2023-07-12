var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function cadastrarGrupoDeMateriais(){
  abreTela();
  Principal.clicaNovo(); 
  inserirGrupoDeMateriais();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela(); 
}

function abreTela() {
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnGrupoMateriais, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoMateriais,"Grupo de Materiais");
}
function inserirGrupoDeMateriais(){
  
  var gridUnidadeMedida = Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoMateriais.
  PageControlGrupoMateriais.tsPesquisaGrupoMateriais.PanelGridGrupoMateriais.dbGridGrupoMateriais;
  for(i = 0; i < Project.Variables.GrupoDeMateriais.RowCount; i++){
  
  gridUnidadeMedida.Keys("[Home]");
  gridUnidadeMedida.Keys("[Right]");
  gridUnidadeMedida.Keys(Project.Variables.GrupoDeMateriais.Descricao(i)); 
  gridUnidadeMedida.Keys("[Down]");
  
  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoMateriais.
  PanelBotoes.PanelBotoesGrupoMateriais.btnConfirma, 'Grupo de Materiais');
}