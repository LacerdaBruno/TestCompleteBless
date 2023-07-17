var Principal = require("Principal");
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
  
  for(let i = 0; i < Project.Variables.ProdutosEMateriais.RowCount; i++){

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
  var Valor_Saida_Prazo = Project.Variables.ProdutosEMateriais.Valor_Saida_Prazo(i);
  var Valor_Entrada_Vista = Project.Variables.ProdutosEMateriais.Valor_Entrada_Vista(i);
  var Valor_Entrada_Prazo = Project.Variables.ProdutosEMateriais.Valor_Entrada_Prazo(i);
  var Peso_Bruto = Project.Variables.ProdutosEMateriais.Peso_Bruto(i);
  var Peso_Liquido = Project.Variables.ProdutosEMateriais.Peso_Liquido(i);
  var Tribitacao_PDV = Project.Variables.ProdutosEMateriais.Tribitacao_PDV(i);
  var ICMS_PDV = Project.Variables.ProdutosEMateriais.ICMS_PDV(i);
  var tsdadosProdutoFiscal = Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados;

  
   Principal.insereDropDownValue(tsdadosProdutoFiscal.TIPO, Tipo_NF);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.TIPO_PRODUTO, Tipo_Produto);
   tsdadosProdutoFiscal.DESCRICAO.Keys(Descricao);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.UNIDADE_MEDIDA, UN);
   tsdadosProdutoFiscal.GTIN.Keys(GTIN);
   tsdadosProdutoFiscal.EAN.Keys(EAN);
   tsdadosProdutoFiscal.CEST.Keys(CEST);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CST_ICMS, ICMS);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CST_IPI, IPI);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CLASSIFICACAO_FISCAL, Classificacao_Fiscal);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.UNIDADES_VOLUME, Unidade_Volume);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.ORIGEM_MERCADORIA, Origem);
   tsdadosProdutoFiscal.MAO_DE_OBRA.Keys(Mao_de_Obra);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.SUB_CONTA_CONTABIL, CTA_Contabil);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CODIGO_GRUPO, Grupo);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CODIGO_SUBGRUPO, Subgrupo);
   tsdadosProdutoFiscal.gbValoresVenda.VENDA_UNIT.Keys(Valor_Saida_Vista);
   tsdadosProdutoFiscal.gbValoresVenda.VENDA_PRAZO_UNIT.Keys(Valor_Saida_Prazo);
   tsdadosProdutoFiscal.gbValoresCompra.COMPRA_UNIT.Keys(Valor_Entrada_Vista);   
   tsdadosProdutoFiscal.gbValoresCompra.COMPRA_PRAZO_UNIT.Keys(Valor_Entrada_Prazo);
   tsdadosProdutoFiscal.gbPeso.PESO_BRUTO.Keys(Peso_Bruto);
   tsdadosProdutoFiscal.gbPeso.PESO_LIQUIDO.Keys(Peso_Liquido);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.gbPDV.TRIBUTACAO, Tribitacao_PDV);
   tsdadosProdutoFiscal.gbPDV.ALQ_ICMS.Keys(ICMS_PDV);

  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.Panel1.PanelBotoes.btnConfirma, "produto NF");
}

module.exports.cadastraProdutoFinanceiro = cadastraProdutoFinanceiro;
