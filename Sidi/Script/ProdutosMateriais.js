﻿var Principal = require("Principal");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

//var Video = require("Video");

function cadastraProdutoFinanceiro(){
  
  abreTela();
  Principal.clicaNovo(); 
  inserirProdutoFinanceiro();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela(); 
}

function abreTela()
{
  Principal.alteraAba("Financeiro");
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnProdutosNF,
                        Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal,
                          "Produtos e Materiais 'Financeiro'");
}

function inserirProdutoFinanceiro(){
  for(i = 0; i < Project.Variables.ProdutosEMateriais.RowCount; i++){

  var Tipo_NF = Project.Variables.ProdutosEMateriais.Tipo_NF(i);
  var Tipo_Produto = Project.Variables.ProdutosEMateriais.Tipo_Produto(i);
  var Descricao = Project.Variables.ProdutosEMateriais.Descricao(i);
  var UN = Project.Variables.ProdutosEMateriais.UN(i);
  var GTIN = Project.Variables.ProdutosEMateriais.GTIN(i);
  var EAN = Project.Variables.ProdutosEMateriais.EAN(i);
  var CEST = Project.Variables.ProdutosEMateriais.CEST(i);
  var ICMS = Project.Variables.ProdutosEMateriais.ICMS(i);
  var IPI = Project.Variables.ProdutosEMateriais.IPI(i);
  var Classificacao_Fiscal = Project.Variables.ProdutosEMateriais.Classificacao_Fiscal(i);
  var Unidade_Volume = Project.Variables.ProdutosEMateriais.Unidade_Volume(i);
  var Origem = Project.Variables.ProdutosEMateriais.Origem(i);
  var Mao_de_Obra = Project.Variables.ProdutosEMateriais.Mao_de_Obra(i);
  var CTA_Contabil = Project.Variables.ProdutosEMateriais.CTA_Contabil(i);
  var Grupo = Project.Variables.ProdutosEMateriais.Grupo(i);
  var Subgrupo = Project.Variables.ProdutosEMateriais.Subgrupo(i);
  var Valor_Saida_Vista = Project.Variables.ProdutosEMateriais.Valor_Saida_Vista(i);
  var Valor_Saida_Prazo = Project.Variables.ProdutosEMateriais.Valor_Saida_Prazo();
  var Valor_Entrada_Vista = Project.Variables.ProdutosEMateriais.Valor_Entrada_Vista(i);
  var Valor_Entrada_Prazo = Project.Variables.ProdutosEMateriais.Valor_Entrada_Prazo(i);
  var Peso_Bruto = Project.Variables.ProdutosEMateriais.Peso_Bruto(i);
  var Peso_Liquido = Project.Variables.ProdutosEMateriais.Peso_Liquido(i);
  var Tribitacao_PDV = Project.Variables.ProdutosEMateriais.Tribitacao_PDV(i);
  var ICMS_PDV = Project.Variables.ProdutosEMateriais.ICMS_PDV(i);
  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.Panel1.PanelBotoes.btnConfirma, "produto NF");
}
function Tipo_NF(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.TIPO;
}
function Tipo_Produto(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.TIPO_PRODUTO;
}
function Descricao(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.DESCRICAO;
}
function UN(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.UNIDADE_MEDIDA;
}
function GTIN(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.GTIN;
}
function EAN(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.EAN;
}
function CEST(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CEST;
}
function ICMS(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CST_ICMS;
}
function IPI(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CST_IPI;
}
function Classificacao_Fiscal(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CLASSIFICACAO_FISCAL;
}
function Unidade_Volume(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.UNIDADES_VOLUME;
}
function Origem(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.ORIGEM_MERCADORIA;
}
function Mao_de_Obra(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.MAO_DE_OBRA;
}
function CTA_Contabil(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.SUB_CONTA_CONTABIL;
}
function Grupo(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CODIGO_GRUPO;
}
function Subgrupo(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CODIGO_SUBGRUPO;
}
function Valor_Saida_Vista(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbValoresVenda.VENDA_UNIT;
}
function Valor_Saida_Prazo(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbValoresVenda.VENDA_PRAZO_UNIT;
}
function Valor_Entrada_Vista(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbValoresCompra.COMPRA_UNIT;
}
function Valor_Entrada_Prazo(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbValoresCompra.COMPRA_PRAZO_UNIT;
}
function Peso_Bruto(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbPeso.PESO_BRUTO;
}
function Peso_Liquido(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbPeso.PESO_LIQUIDO;
}
function Tribitacao_PDV(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbPDV.TRIBUTACAO;
}
function ICMS_PDV(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbPDV.ALQ_ICMS;
}

module.exports.abreTela = abreTela;
module.exports.confirma = confirma;
module.exports.insereUnidadeVolume = insereUnidadeVolume;
module.exports.insereOrigem = insereOrigem;
module.exports.marvaItemEstoque = marvaItemEstoque;
module.exports.inserePrecoSaida = inserePrecoSaida;
module.exports.inserePeso = inserePeso;