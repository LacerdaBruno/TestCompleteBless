﻿var Data = require("Data");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");


var materiais = Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsDadosItemEstoque;

function cadastraMateriais(){
  abreTela();
  Principal.clicaNovo(); 
  insereMateriais();
  confirma();
  /*CRIAR UMA FUNÇÃO PARA CADASTRAR O PRODUTO NFE INDEPENDENTE DO SCRPT DE PRODUTO NFE*/

  
  /*Principal.clicaEditar();
  confirma();
  Principal.fechaTela();*/ 
}

function insereMateriais() {

	for (let i = 0; i < Project.Variables.Materiais.RowCount; i++) {
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
		var classificacaoFiscal = (Project.Variables.Materiais.classificacao_fiscal(i));

		if (Project.Variables.Materiais.descricao(i) == "SOLADO" ||
			Project.Variables.Materiais.descricao(i) == "PALMILHA") {
			insereUnidadeVolume("34 A 43");
			marcaGerarMovtPelaGrade();
		}
      
    materiais.FK_TIPO_ITEM_ESTOQUE.Keys(tipo + "[Enter]");
    materiais.CODIGO_GRUPO.Keys(grupo + "[Enter]");
    Principal.insereDropDownValue(materiais.CODIGO_SUB_GRUPO, subGrupo);
    Principal.insereDropDownValue(materiais.DESCRICAO, descricao);
    materiais.CODIGO_COR.Keys(cor + "[Enter]");
    materiais.gbCusto.CUSTO_UNIT.Keys(custoUnit + "[Tab]");
    materiais.gbCusto.ALQ_ICMS.Keys(aliqICMS + "[Tab]");
    materiais.gbCusto.ALQ_IPI.Keys(aliqIPI + "[Tab]");
    materiais.gbunidadesItemEstoque.UNIDADE_MEDIDA.Keys(unidadeMedida + "[Enter]");
    materiais.gbunidadesItemEstoque.UNIDADE_CONSUMO.Keys(unidadeConsumo + "[Enter]");
    materiais.gbunidadesItemEstoque.AREA_CONSUMO.Keys(area + "[Enter]");
    materiais.UNIDADES_VOLUME.Keys(unidadeVolume + "[Enter]");
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
    
	}
}

function abreTela() {
	Principal.alteraAba("Suprimentos");

	Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnMateriaisItem,
		Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque,
		"Materiais - Suprimentos");
}

function insereCF(cf) {
	materiais.CLF_FISCAL.Keys(cf);
}

function confirma() {
	Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.Panel1.PanelBotoes.btnConfirma, "Materiais");
  if (Aliases.SIDI.MensagemConfirmacao.Exists){
    Aliases.SIDI.MensagemConfirmacao.Yes.ClickButton();
  }
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