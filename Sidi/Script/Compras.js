var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var Materiais = require("Materiais");

function cadastraCompra() {
  var dadosBasicos = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsDadosBasicosCompra.PanelDadosBasicosCompra;
  var contDados = 0; 
  
  while (contDados <= Project.Variables.ContDados) { 
  var fornecedor = Project.Variables.DadosPessoasServicos.nome(contDados);
  var transportadora = Project.Variables.DadosPessoasServicos.nome(contDados);
  
	abreTela(); 
	Principal.clicaNovo();
	Principal.insereDropDownValue(dadosBasicos.FORNECEDOR, fornecedor);
  Principal.insereDropDownValue(dadosBasicos.CONDICAO, "BOA CONDICAO");
	Principal.insereDropDownValue(dadosBasicos.TRANSP,transportadora);
	dadosBasicos.TIPO_COBRANCA.Keys("BANCARIA" + "[Enter]");
	insereMaterial();
	confirma();
  fazEntrega();
  gerarDuplicatas();
  
  contDados++;
  }
  gerarCopiaCompra()
}

function abreTela() {
	Principal.alteraAba("Suprimentos");
	Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnCompras,
		Aliases.SIDI.frmPrincipal.MDIClient.frmCompra,
		"Compras");
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
  Project.Variables.CodigoMateriais.Reset();
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

}

function gerarDuplicatas(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.tsCompraEntrega.gbPagamentos.PanelPagamentoDocumentos.btnPagamentos.Click();
  
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

function confirma() {
	Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PanelBotoesCompra.PanelBotoes.btnConfirma, "Compras");
}

function abreAbaDadosBasicos() {
	Aliases.SIDI.frmPrincipal.MDIClient.frmCompra.PageControlCompras.ClickTab("&Dados Básicos");
}

function gerarCopiaCompra(){
  var mapFrmCompra = Aliases.SIDI.frmPrincipal.MDIClient.frmCompra;
  abreTela(); 
  mapFrmCompra.PageControlCompras.tsPesquisa.PanelPesquisa.PanelClassificar.btnPesquisar.Click();
  mapFrmCompra.PageControlCompras.tsPesquisa.PanelPesquisa.DblClick();
  Principal.clicaEditar();
  mapFrmCompra.btnCopiar.Click();
  mapFrmCompra.PageControlCompras.tsCopia.Panel7.btnAplicarCriterios.Click();
  //A unica forma que encontrei de fazer foi simulando um click na tela dentro do grid e depois
  //simulando o click na tecla de Espaço do teclado para marcar o campo Copiar da grid.
  mapFrmCompra.PageControlCompras.tsCopia.dbgResultado.Click();
  mapFrmCompra.PageControlCompras.tsCopia.dbgResultado.Keys(" ");
  mapFrmCompra.PageControlCompras.tsCopia.dbgResultado.Keys("[Down]");
  mapFrmCompra.PageControlCompras.tsCopia.dbgResultado.Keys(" ");
  mapFrmCompra.PageControlCompras.tsCopia.dbgResultado.Keys("[Down]");
  mapFrmCompra.PageControlCompras.tsCopia.dbgResultado.Keys(" ");
  
  mapFrmCompra.PanelBotoesCompra.PanelBotoes.btnConfirma.Click();
  
  Principal.fechaTela();
}

