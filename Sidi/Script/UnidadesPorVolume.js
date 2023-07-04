var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

var dbgUnVolume = Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadesVolume.PageUnidadesVolume.tsPesquisa.PanelGridUnidadesVolume.dbGridPesquisaUnidadesVolume;

function cadastraUnidadePorVolume()
{
  abreTela();  
  Principal.clicaNovo();
  insereUnidades("12");  
  insereGrade(" 38 AO 43");  
  insereDescricao("38 AO 43");
  importarGrade();  
  confirma();
  Principal.clicaEditar();
  confirma();
  
  Principal.fechaTela();
}
function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnUnidadesVolume,
  Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadesVolume,
  "Unidades por volume");
}

function insereUnidades(unidades)
{ 
  dbgUnVolume.Keys(unidades); 
}

function insereGrade(grade)
{
  dbgUnVolume.Keys("[Right]");
  dbgUnVolume.Keys(grade);
  dbgUnVolume.Keys("[Enter]");
}

function insereDescricao(Descricao)
{
  dbgUnVolume.Keys(Descricao);
}

function importarGrade()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadesVolume.sbImportar.Click();
}
function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmUnidadesVolume.Panel1.PanelBotoes.btnConfirma, "Unidade por volume");
}
module.exports.cadastraUnidadePorVolume = cadastraUnidadePorVolume;
module.exports.confirma = confirma;
module.exports.abreTela = abreTela;
module.exports.insereUnidades = insereUnidades;
module.exports.insereGrade = insereGrade;
module.exports.insereDescricao = insereDescricao;
module.exports.importarGrade = importarGrade;