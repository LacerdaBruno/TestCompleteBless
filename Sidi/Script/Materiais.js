var ProdutosMateriais = require("ProdutosMateriais");
var Data = require("Data");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

var materiais = Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsDadosItemEstoque;

function cadastraMateriais() {
	abreTela();

	for (let i = 0; i < Project.Variables.Materiais.RowCount; i++) {
		Principal.clicaNovo();
		insereTipo(Project.Variables.Materiais.tipo(i));
		insereGrupo(Project.Variables.Materiais.grupo(i));
		insereSubGrupo(Project.Variables.Materiais.subgrupo(i));
		insereDescricao(Project.Variables.Materiais.descricao(i));
		insereCor(Project.Variables.Materiais.cor(i));
		insereCustoUnit(Project.Variables.Materiais.custo(i));
		insereAliqICMS(Project.Variables.Materiais.icms(i));
		insereAliqIPI(Project.Variables.Materiais.ipi(i));
		insereUnidadeMedida(Project.Variables.Materiais.unidadeEstoque(i));
		insereUnidadeConsumo(Project.Variables.Materiais.unidadeEstoque(i));
		insereArea(Project.Variables.Materiais.area(i));
		insereCF(Project.Variables.Materiais.classificacaoFiscal(i));

		if (Project.Variables.Materiais.descricao(i) == "SOLADO" ||
			Project.Variables.Materiais.descricao(i) == "PALMILHA") {
			insereUnidadeVolume("34 A 43");
			marcaGerarMovtPelaGrade();
		}
		confirma();
		// cadastra produto financeiro
    //Aliases.SIDI.MensagemConfirmacao.Yes.ClickButton()

		if (Project.Variables.Materiais.descricao(i) == "SOLADO" ||
			Project.Variables.Materiais.descricao(i) == "PALMILHA") {
			ProdutosMateriais.insereUnidadeVolume("38 AO 43 - CAIXA COM 12 PARES");
		}

		ProdutosMateriais.insereOrigem("0");
		ProdutosMateriais.inserePrecoSaida(Project.Variables.Materiais.precoVista(i),
			Project.Variables.Materiais.precoVista(i));
		ProdutosMateriais.inserePeso(Project.Variables.Materiais.pesoLiquido(i),
			Project.Variables.Materiais.pesoBruto(i));
		ProdutosMateriais.confirma();
		Principal.fechaTela();
		Principal.clicaEditar();
		confirma();
	}
	Principal.fechaTela();
}

function abreTela() {
	Principal.alteraAba("Suprimentos");

	Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnMateriaisItem,
		Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque,
		"Materiais - Suprimentos");
}

function insereTipo(tipo) {
	materiais.FK_TIPO_ITEM_ESTOQUE.Keys(tipo + "[Enter]");
}

function insereGrupo(grupo) {
	materiais.CODIGO_GRUPO.Keys(grupo + "[Enter]");
}

function insereSubGrupo(subGrupo) {
	Principal.insereDropDownValue(materiais.CODIGO_SUB_GRUPO, subGrupo);
}

function insereDescricao(descricao) {
	Principal.insereDropDownValue(materiais.DESCRICAO, descricao);
}

function insereCor(cor) {
	materiais.CODIGO_COR.Keys(cor + "[Enter]");
}

function insereCustoUnit(custo) {
	materiais.gbCusto.CUSTO_UNIT.Keys(custo + "[Tab]");
}


function insereAliqICMS(aliq) {
	materiais.gbCusto.ALQ_ICMS.Keys(aliq + "[Tab]");
}

function insereAliqIPI(ipi) {
	materiais.gbCusto.ALQ_IPI.Keys(ipi + "[Tab]");
}


function insereAliqFrete(frete) {
	materiais.gbCusto.ALIQ_FRETE.SetText(frete);
}

function inserePrestServico(prest) {
	materiais.gbCusto.CUSTO_PREST_SERVICO.SetText(prest);
}

function insereUnidadeMedida(uni) {
	materiais.gbunidadesItemEstoque.UNIDADE_MEDIDA.Keys(uni + "[Enter]");
}

function insereUnidadeConsumo(unid) {
	materiais.gbunidadesItemEstoque.UNIDADE_CONSUMO.Keys(unid + "[Enter]");
}

function insereArea(area) {
	materiais.gbunidadesItemEstoque.AREA_CONSUMO.Keys(area + "[Enter]");
}

function insereUnidadeVolume(unid) {
	materiais.UNIDADES_VOLUME.Keys(unid + "[Enter]");
}

function marcaGerarMovtPelaGrade() {
	materiais.gbEstoqueDisponivel.Panel2.GERAR_MOVTO_PELA_GRADE.ClickButton(cbChecked);
}

function insereCF(cf) {
	materiais.CLF_FISCAL.Keys(cf);
}

function confirma() {
	Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.Panel1.PanelBotoes.btnConfirma, "Materiais");
}
module.exports.abreTela = abreTela;

function pesquisaPorCodigo(codigo) {
	Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsPesquisaItemEstoque.PanelPesquisa.PanelProcurar.edValor.SetText(codigo);
	Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsPesquisaItemEstoque.PanelPesquisa.PanelClassificar.btnPesquisar.ClickButton();
	Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.ClickTab("&Dados Básicos");
}

function getEstoque(produto) {
	Materiais.abreTela();
	Materiais.pesquisaPorCodigo(produto);
	estoque = aqConvert.StrToInt(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsDadosItemEstoque.GBquantidades.QTE_DISPONIVEL.wText);
	Principal.fechaTela();
	return estoque;
}

module.exports.pesquisaPorCodigo = pesquisaPorCodigo;
module.exports.getEstoque = getEstoque;
module.exports.cadastraMateriais = cadastraMateriais;