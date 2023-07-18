﻿var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var Materiais = require("Materiais");


var fornecedor = Project.Variables.DadosPessoasServicos.nome(0);
var transportadora = Project.Variables.DadosPessoasServicos.nome(1);
var tipoMaterial = Project.Variables.Materiais.tipo(0);
var material = 21856;
var quantidade = 1;

function testaCompras() {
	for (let i = 0; i < Project.Variables.Materiais.RowCount; i++) {
		cadastraCompra(Project.Variables.Materiais.codigo(i), Project.Variables.Materiais.tipo(i), 12);
		fazEntrega(Project.Variables.Materiais.codigo(i), Project.Variables.Materiais.tipo(i), 12);
	}
}

function fazEntrega(material, tipoMaterial, quantidade) {
	// Pega o estoque anterior
	let estoqueAterior = Materiais.getEstoque(material);

	abreAbaEntrega();

	Aliases.SIDI.wndTfrmPrincipal.MDIClient.frmCompras.PageControlCompras.tsObs_condicoes.gbEntregas.Panel5.Panel6.btnEntrega.ClickButton();

	Aliases.SIDI.frmPesquisaMaterialEntregas.Panel3.btnMarcarTodos.ClickButton();

	Aliases.SIDI.frmPesquisaMaterialEntregas.Panel3.btnOk.ClickButton();

	if (tipoMaterial == "PALMILHA" || tipoMaterial == "SOLADO") {
		Aliases.SIDI.wndTfrmPrincipal.MDIClient.frmCompraManut.PageControl1.tsObs_condicoes.gbEntregas.GridItensEntrega.Keys("[F10]");
		let quantidade = 0;
		for (let i = 0; i < Project.Variables.grade.RowCount; i++) {

			let qteEntrega = Aliases.SIDI.frmCompraManutEntregaGrades.dbGrid.Fields(i).Value;
			let qteGrade = aqConvert.StrToInt(Project.Variables.grade.qte(i));

			quantidade += qteGrade;

			if (qteEntrega != qteGrade) {
				Log.Warning("Quantidade da entrega da compra incorreta!!");
			}
		}

		Aliases.SIDI.frmCompraManutEntregaGrades.Panel1.btnconfirma.ClickButton();
	}
	confirma();

	/*
	* Validação
	*/

	abreAbaDadosBasicos();
	let entrege = Aliases.SIDI.wndTfrmPrincipal.MDIClient.frmCompraManut.PageControl1.tsDados_basicos.Panel2.ENTREGUE.Value;

	if (entrege == "S") {
		Log.Checkpoint("Compra cadastrada e entregue corretamente", '', 400, null, Sys.Desktop);
	} else {
		Log.Warning("Situação da compra incorreta!!", '', 400, null, Sys.Desktop)
	}

	/*
	* Valida estoque
	*/
	if (Materiais.getEstoque(material) == quantidade + estoqueAterior) {
		Log.Checkpoint("Estoque validado!!");
	} else {
		Log.Warning("Estoque incorreto", '', 500, null, Sys.Desktop);
	}

	Principal.fechaTela();
}

function cadastraCompra(/*material, tipoMaterial, quantidade*/) {
	abreTela();
	Principal.clicaNovo();
	insereFornecedor(fornecedor);
  insereTransportadora(transportadora);
	insereTipoCobranca("CARTEIRA");
	insereMaterial(material);

	if (tipoMaterial == "PALMILHA" || tipoMaterial == "SOLADO") {
		insereGrade();
	} else {
		insereQuantidade(quantidade);
	}
	confirma();
}

function insereMaterial(material) {
  
  var gdItemCompra = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.GrideItemCompra.gdItemCompra;
  gdItemCompra.Keys(material + "[Enter]");
  gdItemCompra.Keys("[Tab]");
  gdItemCompra.Keys("[Tab]");

}

function insereGrade() {
	Aliases.SIDI.wndTfrmPrincipal.MDIClient.frmCompraManut.PageControl1.tsDados_basicos.GbItem_Compra.gdItem_Compra.Keys("[F10]");
	Aliases.SIDI.frmCompraManutGrade.dbGrid.Keys("[Up]");
	for (let i = 0; i < Project.Variables.grade.RowCount; i++) {
		Aliases.SIDI.frmCompraManutGrade.dbGrid.Keys(Project.Variables.grade.qte(i) + "[Right]");
	}
	Aliases.SIDI.frmCompraManutGrade.Panel1.btnconfirma.ClickButton();
}

function insereQuantidade(quantidade) {
  var gdItemCompra = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.GrideItemCompra.gdItemCompra;
  gdItemCompra.Keys(quantidade);

}

function abreTela() {
	Principal.alteraAba("Suprimentos");
	Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnCompras,
		Aliases.SIDI.frmPrincipal.MDIClient.frmCompra,
		"Compras");
}

function insereFornecedor(fornec) {
	Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.PanelDadosBasicosCompra.FORNECEDOR.Keys(fornec + "[Enter]");
}

function insereTransportadora(transp) {
	Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.PanelDadosBasicosCompra.TRANSP.Keys(transp);
}

function insereTipoCobranca(cobranca) {
	Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.PanelDadosBasicosCompra.TIPO_COBRANCA.Keys(cobranca + "[Enter]");
}

function confirma() {
	Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PanelBotoesCompra.PanelBotoes.btnConfirma, "Compras");
}

function abreAbaEntrega() {
	Aliases.SIDI.wndTfrmPrincipal.MDIClient.frmCompraManut.PageControl1.ClickTab("Entregas, Pagamentos e Observações");
}

function abreAbaDadosBasicos() {
	Aliases.SIDI.wndTfrmPrincipal.MDIClient.frmCompraManut.PageControl1.ClickTab("&Dados Básicos");
}

module.exports.cadastraCompra = cadastraCompra;
module.exports.testaCompras = testaCompras;
module.exports.fazEntrega = fazEntrega;
module.exports.insereGrade = insereGrade;
module.exports.insereQuantidade = insereQuantidade;
module.exports.insereMaterial = insereMaterial;
module.exports.abreTela = abreTela;
module.exports.insereFornecedor = insereFornecedor;
module.exports.insereTransportadora = insereTransportadora;
module.exports.insereTipoCobranca = insereTipoCobranca;
module.exports.confirma = confirma;
module.exports.abreAbaEntrega = abreAbaEntrega;
module.exports.abreAbaDadosBasicos = abreAbaDadosBasicos;

