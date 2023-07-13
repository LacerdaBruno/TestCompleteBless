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
  var Valor_Saida_Prazo = Project.Variables.ProdutosEMateriais.Valor_Saida_Prazo(i);
  var Valor_Entrada_Vista = Project.Variables.ProdutosEMateriais.Valor_Entrada_Vista(i);
  var Valor_Entrada_Prazo = Project.Variables.ProdutosEMateriais.Valor_Entrada_Prazo(i);
  var Peso_Bruto = Project.Variables.ProdutosEMateriais.Peso_Bruto(i);
  var Peso_Liquido = Project.Variables.ProdutosEMateriais.Peso_Liquido(i);
  var Tribitacao_PDV = Project.Variables.ProdutosEMateriais.Tribitacao_PDV(i);
  var ICMS_PDV = Project.Variables.ProdutosEMateriais.ICMS_PDV(i);
  var tsdadosProdutoFiscal = Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados;

  
   tsdadosProdutoFiscal.TIPO.Keys(Tipo_NF+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.TIPO_PRODUTO.Click();
   tsdadosProdutoFiscal.TIPO_PRODUTO.Keys(Tipo_Produto);
   tsdadosProdutoFiscal.TIPO_PRODUTO.Keys("[Enter]");
   tsdadosProdutoFiscal.DESCRICAO.Keys(Descricao);
   tsdadosProdutoFiscal.UNIDADE_MEDIDA.Keys(UN+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.GTIN.Keys(GTIN);
   tsdadosProdutoFiscal.EAN.Keys(EAN);
   tsdadosProdutoFiscal.CEST.Keys(CEST);
   tsdadosProdutoFiscal.CST_ICMS.Keys(ICMS+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.CST_IPI.Keys(IPI+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.CLASSIFICACAO_FISCAL.Keys(Classificacao_Fiscal+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.UNIDADES_VOLUME.Keys(Unidade_Volume+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.ORIGEM_MERCADORIA.Click();
   tsdadosProdutoFiscal.ORIGEM_MERCADORIA.Keys(Origem+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.MAO_DE_OBRA.Keys(Mao_de_Obra);
   tsdadosProdutoFiscal.SUB_CONTA_CONTABIL.Keys(CTA_Contabil+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.CODIGO_GRUPO.Keys(Grupo+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.CODIGO_SUBGRUPO.Keys(Subgrupo+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.gbValoresVenda.VENDA_UNIT.Keys(Valor_Saida_Vista);
   tsdadosProdutoFiscal.gbValoresVenda.VENDA_PRAZO_UNIT.Keys(Valor_Saida_Prazo);
   tsdadosProdutoFiscal.gbValoresCompra.COMPRA_UNIT.Keys(Valor_Entrada_Vista);   
   tsdadosProdutoFiscal.gbValoresCompra.COMPRA_PRAZO_UNIT.Keys(Valor_Entrada_Prazo);
   tsdadosProdutoFiscal.gbPeso.PESO_BRUTO.Keys(Peso_Bruto);
   tsdadosProdutoFiscal.gbPeso.PESO_LIQUIDO.Keys(Peso_Liquido);
   tsdadosProdutoFiscal.gbPDV.TRIBUTACAO.Keys(Tribitacao_PDV+"[Enter]");
   tsdadosProdutoFiscal.Keys("[Tab]");
   tsdadosProdutoFiscal.gbPDV.ALQ_ICMS.Keys(ICMS_PDV);

  }
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.Panel1.PanelBotoes.btnConfirma, "produto NF");
}
