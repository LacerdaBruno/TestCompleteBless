var Data = require("Data");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var UnidadesPorVolume = require("UnidadesPorVolume");

function testaLinhas()
{
  cadastraLinha("Infantil");
  Principal.clicaEditar();
  confirma();
  
  cadastraLinha("Adulto");
  
  Principal.fechaTela();

}

function abreTela()
{
  Principal.alteraAba("Produção");
  
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnLinhas,
  Aliases.SIDI.frmPrincipal.MDIClient.frmLinhas,
  "Linhas");
}

function cadastraLinha(linha)
{
  abreTela();
  
  Principal.clicaNovo();
  
  Aliases.SIDI.frmPrincipal.MDIClient.frmLinhas.PageControl1.tsPesquisa.PanelGridLinhas.dbGridLinhas.Keys(linha);
  
  confirma();  
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmLinhas.Panel1.PanelBotoes.btnConfirma,
  "Linhas");
}

module.exports.testaLinhas = testaLinhas;
module.exports.abreTela = abreTela;
module.exports.cadastraLinha = cadastraLinha;
module.exports.confirma = confirma;