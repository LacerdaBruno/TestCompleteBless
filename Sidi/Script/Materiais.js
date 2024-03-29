﻿var Data = require("Data");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");


var materiais = Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsDadosItemEstoque;

function cadastraMateriais(){

	for (let i = 0; i < Project.Variables.Materiais.RowCount; i++) {
  abreTela(); 
  Principal.clicaNovo();
   // var codigoUsuario = (Project.Variables.Materiais.codigo(i));
		var tipo = (Project.Variables.Materiais.tipo(i));
		var grupo = (Project.Variables.Materiais.grupo(i));
		var subGrupo = (Project.Variables.Materiais.subgrupo(i));
		var descricao = (Project.Variables.Materiais.descricao(i));
		var cor = (Project.Variables.Materiais.cor(i));
    var setor = (Project.Variables.Materiais.setor(i));
    var unidadeVolume = (Project.Variables.Materiais.unidade_volume(i));
		var custoUnit = (Project.Variables.Materiais.custo(i));
		var aliqICMS = (Project.Variables.Materiais.icms(i));
		var aliqIPI = (Project.Variables.Materiais.ipi(i));
		var unidadeMedida = (Project.Variables.Materiais.unidade_estoque(i));
		var unidadeConsumo = (Project.Variables.Materiais.unidade_estoque(i));
		var area = (Project.Variables.Materiais.area(i));
    var origem = (Project.Variables.Materiais.origem(i));
		var classificacaoFiscal = (Project.Variables.Materiais.classificacao_fiscal(i));

		if (Project.Variables.Materiais.descricao(i) == "SOLADO" ||
			Project.Variables.Materiais.descricao(i) == "PALMILHA") {
			insereUnidadeVolume("34 A 43");
			marcaGerarMovtPelaGrade();
		}
 
    Principal.insereDropDownValue(materiais.FK_TIPO_ITEM_ESTOQUE, tipo);
    Principal.insereDropDownValue(materiais.CODIGO_GRUPO, grupo);
    Principal.insereDropDownValue(materiais.CODIGO_SUB_GRUPO, subGrupo);
    Principal.insereDropDownValue(materiais.DESCRICAO, descricao);
    materiais.CODIGO_COR.Keys(cor + "[Enter]");
    Principal.insereDropDownValue(materiais.CODIGO_SETOR, setor);
    materiais.UNIDADES_VOLUME.Keys(" "+unidadeVolume + "[Tab]");
    materiais.gbCusto.CUSTO_UNIT.Keys(custoUnit + "[Tab]");
    materiais.gbCusto.ALQ_ICMS.Keys(aliqICMS + "[Tab]");
    materiais.gbCusto.ALQ_IPI.Keys(aliqIPI + "[Tab]");
    Principal.insereDropDownValue(materiais.gbunidadesItemEstoque.UNIDADE_MEDIDA, unidadeMedida);
    materiais.gbunidadesItemEstoque.UNIDADE_CONSUMO.Keys(unidadeConsumo + "[Enter]");
    materiais.gbunidadesItemEstoque.AREA_CONSUMO.Keys(area + "[Enter]");
    Principal.insereDropDownValue(materiais.ORIGEM_MERCADORIA, origem);
    Principal.insereDropDownValue(materiais.CLF_FISCAL, classificacaoFiscal);
    materiais.pnlOpcoesMarcar.COMPOE_CUSTO.ClickButton(cbChecked);
    
    if (Project.Variables.Materiais.tipo(i) == "SOLADO" || 
        Project.Variables.Materiais.tipo(i) == "PALMILHA" ||
        Project.Variables.Materiais.grupo(i) == "PRODUTO EM PROCESSO") {
		  materiais.gbEstoqueDisponivel.Panel2.GERAR_MOVTO_PELA_GRADE.ClickButton(cbChecked);
    }
    if (Project.Variables.Materiais.setor(i) == "CORTE" ) {
		  materiais.pnlOpcoesMarcar.SETOR_CORTE.ClickButton(cbChecked);
    }
    
    confirma();
    inserirProdutoFinanceiro(i)
    confirmaProdutoNf()
    Principal.fechaTela(); 
    Principal.fechaTela();      
	}
}

function inserirProdutoFinanceiro(i){
  
  var Tipo_NF = Project.Variables.Materiais.Tipo_NF(i);
  var Tipo_Produto = Project.Variables.Materiais.Tipo_Produto(i);
  var GTIN = Project.Variables.Materiais.GTIN(i);
  var EAN = Project.Variables.Materiais.EAN(i);
  var CEST = Project.Variables.Materiais.CEST(i);
  var CST_ICMS = Project.Variables.Materiais.CST_ICMS(i);
  var CST_IPI = Project.Variables.Materiais.CST_IPI(i);
  var Origem = Project.Variables.Materiais.origem(i);
  var Grupo = Project.Variables.Materiais.grupo(i);
  var Subgrupo = Project.Variables.Materiais.subgrupo(i);
  var Valor_Saida_Vista = Project.Variables.Materiais.custo(i);
  var Valor_Saida_Prazo = Project.Variables.Materiais.custo(i);
  var Peso_Bruto = Project.Variables.Materiais.peso_bruto(i);
  var Peso_Liquido = Project.Variables.Materiais.peso_liquido(i);
  var Tribitacao_PDV = Project.Variables.Materiais.tributacao_pdv(i);
  var ICMS_PDV = Project.Variables.Materiais.ICMS_PDV(i);
  var tsdadosProdutoFiscal = Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.PageControlProdutoFiscal.tsdados;
  
   Principal.insereDropDownValue(tsdadosProdutoFiscal.TIPO, Tipo_NF);
   Delay(1000);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.TIPO_PRODUTO, Tipo_Produto);
   tsdadosProdutoFiscal.GTIN.Keys(GTIN);
   tsdadosProdutoFiscal.EAN.Keys(EAN);
   tsdadosProdutoFiscal.CEST.Keys(CEST);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CST_ICMS, CST_ICMS);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CST_IPI, CST_IPI);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.ORIGEM_MERCADORIA, Origem);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CODIGO_GRUPO, Grupo);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.CODIGO_SUBGRUPO, Subgrupo);
   tsdadosProdutoFiscal.gbValoresVenda.VENDA_UNIT.Keys(Valor_Saida_Vista);
   tsdadosProdutoFiscal.gbValoresVenda.VENDA_PRAZO_UNIT.Keys(Valor_Saida_Prazo);
   tsdadosProdutoFiscal.gbPeso.PESO_BRUTO.Keys(Peso_Bruto);
   tsdadosProdutoFiscal.gbPeso.PESO_LIQUIDO.Keys(Peso_Liquido);
   Principal.insereDropDownValue(tsdadosProdutoFiscal.gbPDV.TRIBUTACAO, Tribitacao_PDV);
   tsdadosProdutoFiscal.gbPDV.ALQ_ICMS.Keys(ICMS_PDV);
}

function abreTela() {
	Principal.alteraAba("Suprimentos");
	Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnMateriaisItem,
		Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque,
		"Materiais - Suprimentos");
}

function confirma() {
	Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.Panel1.PanelBotoes.btnConfirma, "Materiais");
  if (Aliases.SIDI.MensagemConfirmacao.Exists){
    Aliases.SIDI.MensagemConfirmacao.Yes.ClickButton();
  }
}
function confirmaProdutoNf(){
   Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmProdutoFiscal.Panel1.PanelBotoes.btnConfirma, "produto NF");
}

function pesquisaPorCodigo(codigo) {
	Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoqueManut.PageControl1.tsPesquisa.PanelPesquisa.PanelProcurar.edValor.SetText(codigo);
	Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoqueManut.PageControl1.tsPesquisa.PanelPesquisa.PanelClassificar.btnPesquisar.ClickButton();
	Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoqueManut.PageControl1.ClickTab("&Dados Básicos");
}

function getEstoque(produto) {
	Materiais.abreTela();
	Materiais.pesquisaPorCodigo(produto);
	estoque = aqConvert.StrToInt(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoqueManut.PageControl1.tsDados.GBquantidades.QTE_DISPONIVEL.wText);
	Principal.fechaTela();
	return estoque;
}
module.exports.abreTela = abreTela;
module.exports.pesquisaPorCodigo = pesquisaPorCodigo;
module.exports.getEstoque = getEstoque;
module.exports.cadastraMateriais = cadastraMateriais;

