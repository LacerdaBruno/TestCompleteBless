var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function cadastrarSubgrupoDeMateriais(){
  abreTela();
  Principal.clicaNovo(); 
  inserirSubgrupoDeMateriais();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela(); 
}

function abreTela() {
  Principal.alteraAba("Suprimentos");
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnSubGrupoMateriais, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmSubGrupo,"Subgrupo de Materiais");
}
function inserirSubgrupoDeMateriais(){
  
  var gridSubGrupoMateriais = Aliases.SIDI.frmPrincipal.MDIClient.frmSubGrupo.PageControlSubGrupo.tsPesquisaSubGrupo.PanelGridSubGrupo.dbGridSubGrupo;
  for(i = 0; i < Project.Variables.SubGrupoMateriais.RowCount; i++){
  
  gridSubGrupoMateriais.Keys("[Home]");
  gridSubGrupoMateriais.ComboGrupo.Click();
  gridSubGrupoMateriais.ComboGrupo.Keys(Project.Variables.SubGrupoMateriais.Codigo_Grupo(i));
  Delay(500)
  gridSubGrupoMateriais.Keys("[Enter]"); 
  gridSubGrupoMateriais.Keys("[Right]");
  gridSubGrupoMateriais.Keys("[Right]");  
  gridSubGrupoMateriais.Keys(Project.Variables.SubGrupoMateriais.Descricao(i));
  gridSubGrupoMateriais.Keys("[Right]");
  gridSubGrupoMateriais.Keys(Project.Variables.SubGrupoMateriais.Unidade_Estoque(i));
  Delay(500)
  gridSubGrupoMateriais.Keys("[Enter]");
  gridSubGrupoMateriais.Keys(Project.Variables.SubGrupoMateriais.Unidade_Consumo(i));
  Delay(500)
  gridSubGrupoMateriais.Keys("[Enter]");
  gridSubGrupoMateriais.Keys("[Down]");
  
  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmSubGrupo.PanelBotoes.PanelBotoesSubGrupo.btnConfirma, 'Subrupo de Materiais');
}