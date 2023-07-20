var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var Materiais = require("Materiais");

  var fornecedor = Project.Variables.DadosPessoasServicos.nome(0);
  var transportadora = Project.Variables.DadosPessoasServicos.nome(1);


function cadastraCompra() {
	abreTela();
	Principal.clicaNovo();
	insereFornecedor(fornecedor);
  insereTransportadora(transportadora);
	insereTipoCobranca("CARTEIRA");
	insereMaterial();
	confirma();
  fazEntrega();
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

function fazEntrega(){

	var PageControlCompras = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras;
  var Panel3 = Aliases.SIDI.frmPesquisaMaterialEntrega.Panel3;
  
  PageControlCompras.ClickTab("Entregas, Pagamentos e Observações");
	PageControlCompras.tsCompraEntrega.gbEntregas.Panel5.Panel6.btnEntrega.ClickButton();
	Panel3.btnMarcarTodos.ClickButton();
	Panel3.btnOk.ClickButton();

	confirma();
  
	abreAbaDadosBasicos();
	let entrege = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.PanelDadosBasicosCompra.ENTREGUE.ItemIndex;     

	if (entrege == "0") {
		Log.Checkpoint("Compra cadastrada e entregue corretamente", '', 400, null, Sys.Desktop);
	} else {
		Log.Warning("Situação da compra incorreta!!", '', 400, null, Sys.Desktop)
	}

	Principal.fechaTela();
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

function abreAbaDadosBasicos() {
	Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.ClickTab("&Dados Básicos");
}

