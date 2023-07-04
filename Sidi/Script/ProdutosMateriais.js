﻿var Produtos = require("Produtos");
var Principal = require("Principal");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var Materiais = require("Materiais");
//var Video = require("Video");

function testaProdutosMateriais()
{
 for(i = 0; i < Project.Variables.Produto.RowCount; i++){
    produtoDesc = Project.Variables.Produto.descricao(i);
    ref = Project.Variables.Produto.referencia(i);
    precoAVista = Project.Variables.Produto.unitario_Vista(i);
    precoAPrazo = Project.Variables.Produto.unitario(i);
    pesoLiquido = Project.Variables.Produto.pesoLiquido(i);
    pesoBruto = Project.Variables.Produto.pesoBruto(i);
    cor = Project.Variables.Produto.cor(i);
    
    cadastraProdutoFinanceiro(produtoDesc, ref, cor, precoAVista, precoAPrazo, pesoLiquido, pesoBruto);
    cadastraProdutoFinanceiroIntegral(produtoDesc, ref, cor, precoAVista, precoAPrazo, pesoLiquido, pesoBruto);
    Produtos.gerarProdutoNF(ref);
 }
}

function cadastraProdutoFinanceiro(produtoDesc, ref, cor, precoAVista, precoAPrazo, pesoLiquido, pesoBruto)
{
  Produtos.abreTela();
  Produtos.pesquisaProdutoPorReferencia(ref);
  Produtos.abreAbaDadosBasicos();
  abreTela();
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.btnCadastrarProdutoNF.Click();
  
  insereCor(cor);
  
  insereUnidadeVolume("38 AO 43 - CAIXA COM 12 PARES");
  
  insereUnidadeMedida("PR");
  
  insereClassificacao("06140210");
  
  insereOrigem();
  
  inserePrecoSaida(precoAVista, precoAPrazo);
  
  inserePeso(pesoLiquido, pesoBruto);
  
  confirma();
  
  Principal.fechaTela();
  
  if(produtoDesc == Produtos.getProdutoNF()){
    Log.Checkpoint("Produto NF " + produtoDesc + " gerado e vinculado corretamente.");
  }
}

function cadastraProdutoFinanceiroIntegral(produtoDesc, ref, cor, precoAVista, precoAPrazo, pesoLiquido, pesoBruto)
{
  Produtos.abreTela();
  Produtos.pesquisaProdutoPorReferencia(ref);
  Produtos.abreAbaDadosBasicos();
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.btnCadastrarProdutoNFInt.Click();
  
  insereCor(cor);
  
  insereDescricao(produtoDesc+" Integral");
  
  insereUnidadeVolume("38 AO 43 - CAIXA COM 12 PARES");
  
  insereUnidadeMedida("PR");
  
  insereClassificacao("06140210");
  
  insereDescAbreviada(produtoDesc+" INTEGRAL");
  
  insereOrigem();
  
  inserePrecoSaida(precoAVista, precoAPrazo);
  
  inserePeso(pesoLiquido, pesoBruto);
  
  confirma();
  
  Principal.fechaTela();
  
  if(produtoDesc == Produtos.getProdutoNF()){
    Log.Checkpoint("Produto NF integral" + produtoDesc + " gerado e vinculado corretamente.");
  }
}

function abreTela()
{
  Principal.alteraAba("Financeiro");
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnProdutosNF,
                        Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal,
                          "Produtos e Materiais 'Financeiro'");
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.Panel1.PanelBotoes.btnConfirma, "produto NF");
  Principal.verificaConfirmado(
        Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.Panel1.PanelBotoes.btnConfirma, "produto NF");
}

function insereUnidadeVolume(unidadePorVolume)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.UNIDADES_VOLUME.Click();
  Principal.insereDropDownValue(
                        Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.UNIDADES_VOLUME,
                        unidadePorVolume);  
}

function insereOrigem(origem)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.ORIGEM_MERCADORIA.Click();
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.ORIGEM_MERCADORIA.Keys("0[Enter]");
  //Principal.insereDropDownValue(
  //                  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal2.PageControl1.tsdados.ORIGEM_MERCADORIA,
  //                  origem);
}

function marvaItemEstoque()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.ITEM_ESTOQUE.ClickButton(cbChecked);
}

function inserePrecoSaida(vista, prazo)
{
    Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbValoresVenda.VENDA_UNIT.Keys(vista);
    Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbValoresVenda.VENDA_PRAZO_UNIT.Keys(prazo);
}

function inserePeso(liquido, bruto)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbPeso.PESO_BRUTO.Keys(bruto);
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.gbPeso.PESO_LIQUIDO.Keys(liquido);
}
module.exports.abreTela = abreTela;
module.exports.confirma = confirma;
module.exports.insereUnidadeVolume = insereUnidadeVolume;
module.exports.insereOrigem = insereOrigem;
module.exports.marvaItemEstoque = marvaItemEstoque;
module.exports.inserePrecoSaida = inserePrecoSaida;
module.exports.inserePeso = inserePeso;

function insereUnidadeMedida(UN)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.UNIDADE_MEDIDA.Keys(UN+"[Enter]");
}

function insereCor(cor)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.ClickTab("&Dados Básicos");
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.FK_VERSAO.Keys(cor+"[Enter]");
}

function insereClassificacao(classificacao)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.ClickTab("&Dados Básicos");
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.CLASSIFICACAO_FISCAL.Keys(classificacao+"[Enter]");
}

function insereDescricao(desc)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.ClickTab("&Dados Básicos");
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.DESCRICAO.SetText(desc);
}

function insereDescAbreviada(desc)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.ClickTab("&Dados Básicos");
  Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados.DESCRICAO.Keys(desc);
}