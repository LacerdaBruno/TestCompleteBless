var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var Materiais = require("Materiais");

  var fornecedor = Project.Variables.DadosPessoasServicos.nome(0);
  var transportadora = Project.Variables.DadosPessoasServicos.nome(1);

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

function cadastraCompra() {
	abreTela();
	Principal.clicaNovo();
	insereFornecedor(fornecedor);
  insereTransportadora(transportadora);
	insereTipoCobranca("CARTEIRA");
	insereMaterial();
	confirma();
}

function insereMaterial(material) {
  var indice = 0;
  var gdItemCompra = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.GrideItemCompra.gdItemCompra;
  
  while ( ! Project.Variables.CodigoMateriais.IsEOF()){    
  
  var tipoMaterial = Project.Variables.Materiais.tipo(indice);
  var quantidade = 1;   
  var material = Project.Variables.CodigoMateriais.Value("CODIGO_USUARIO");
  
  gdItemCompra.Keys(material + "[Enter]");
  gdItemCompra.Keys("[Tab]");
  gdItemCompra.Keys("[Tab]");
  if (tipoMaterial == "SOLADO" || tipoMaterial == "PALMILHA" || tipoMaterial == "PRODUTO EM PROCESSO") {
		  insereGrade();
    } else {
		  insereQuantidade(quantidade);
	}
  gdItemCompra.Keys("[Down]"); 
  
  indice++;
  Project.Variables.CodigoMateriais.Next();
  
  }
  
}

function insereGrade() {
	Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.GrideItemCompra.gdItemCompra.Keys("[F10]");
	Aliases.SIDI.frmCompraGrade.dbGridCompraGrade.Keys("[Up]");
	for (let i = 0; i < Project.Variables.Grade.RowCount; i++) {
		Aliases.SIDI.frmCompraGrade.dbGridCompraGrade.Keys(Project.Variables.Grade.quantidade(i) + "[Right]");
	}
	Aliases.SIDI.frmCompraGrade.PanelBotoesCompraGrade.btnconfirma.ClickButton();
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

