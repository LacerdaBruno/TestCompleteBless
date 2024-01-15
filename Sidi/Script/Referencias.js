var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function testaReferencias()
{
  for(i = 0; i < Project.Variables.Produto.RowCount; i++){
   cadastraReferencia(Project.Variables.Produto.referencia(i)); 
  }
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela();
}

function cadastraReferencia(referencia)
{
  abreTela();  
  Principal.clicaNovo();  
  insereDescricao(referencia);  
  insereGrade("38 AO 43");  
  insereNumeracao("38 AO 43");  
  insereLinha("Adulto");  
  abreAbaCordenacoes();
  if(Project.Variables.ControleSistema) 
  insereForma("Forma padrao");
  
}

function abreTela()
{
  Principal.alteraAba("Produção");
  
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnReferencias,
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias,
  "Referencias");
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.Panel1.PanelBotoes.btnConfirma, "Referencia");
}

function abreAbaDadosbasicos()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.ClickTab("&Dados Básicos");
}

function abreAbaCordenacoes()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.ClickTab("Coo&rdenações");
}

function insereDescricao(descricao)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.tsDados.DESCRICAO.Keys(descricao);
}

function insereGrade(grade)
{
    Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.tsDados.DBLookupGrade.Keys(grade+"[Enter]");
}

function insereNumeracao(num)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.tsDados.NUMERACAO.Keys(num);
}

function insereLinha(linha)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.tsDados.FK_LINHA.Keys(linha);
}

function insereForma(forma)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmReferencias.PageControl1.tsCoordenacao.gbForma.Panel2.lcForma.Keys(forma);
  confirma();
  Aliases.SIDI.dlgAten_o.btnSim.ClickButton();
}
module.exports.testaReferencias = testaReferencias;
module.exports.abreTela = abreTela;