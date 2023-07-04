var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var descricao = "Teste Bless";
var qteParcelas = 36;
var intervalo = 30;

function TesteCadastros()
{
  CondicaoPagamento.cadastraCondicaoPagamento("Boa condicao", Project.Variables.quantidadeParcelas, 30);
}


function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnCondicoesPagamento, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmCondicaoPagtoManut,
   "Condições de pagamento");     
}

/**
* Recebe a descrição da condição a Quantidade de parcelas e o intervalo de dias entre cada parcela
*/
function cadastraCondicaoPagamento(descricao, qteParcelas, intervalo)

{
  objeto = Aliases.SIDI.frmPrincipal.MDIClient.frmCondicaoPagtoManut.TelaCondicaoPagamento.tsDados; 

    // Array contendo os campos de parcelas
  var parcelas = new Array(
  objeto.gbParcelamento.V1,
  objeto.gbParcelamento.V2,
  objeto.gbParcelamento.V3,
  objeto.gbParcelamento.V4,
  objeto.gbParcelamento.V5,
  objeto.gbParcelamento.V6,
  objeto.gbParcelamento.V7,
  objeto.gbParcelamento.V8,
  objeto.gbParcelamento.V9,
  objeto.gbParcelamento.V10,
  objeto.gbParcelamento.V11,
  objeto.gbParcelamento.V12,
  objeto.gbParcelamento.V13,
  objeto.gbParcelamento.V14,
  objeto.gbParcelamento.V15,
  objeto.gbParcelamento.V16,
  objeto.gbParcelamento.V17,
  objeto.gbParcelamento.V18,
  objeto.gbParcelamento.V19,
  objeto.gbParcelamento.V20,
  objeto.gbParcelamento.V21,
  objeto.gbParcelamento.V22,
  objeto.gbParcelamento.V23,
  objeto.gbParcelamento.V24,
  objeto.gbParcelamento.V25,
  objeto.gbParcelamento.V26,
  objeto.gbParcelamento.V27,
  objeto.gbParcelamento.V28,
  objeto.gbParcelamento.V29,
  objeto.gbParcelamento.V30,
  objeto.gbParcelamento.V31,
  objeto.gbParcelamento.V32,
  objeto.gbParcelamento.V33,
  objeto.gbParcelamento.V34,
  objeto.gbParcelamento.V35,
  objeto.gbParcelamento.V36);
  
  abreTela(); 
  
  // Inicia o cadastro
  Principal.clicaNovo();
  
  // insere descrição
  objeto.DESCRICAO.Keys(descricao);
  
  
  i=0;
  dias = 0;
  // Insere as parcelas
  while(i < qteParcelas){
      parcelas[i].SetText(aqConvert.IntToStr(dias));
      dias += intervalo;
      i++;
  }
  
  // Confirma a condição
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.clicaEditar();
  cancela();
  
  Principal.fechaTela();
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmCondicaoPagtoManut.Panel1.PanelBotoes.btnConfirma, "Condição de pagamento");
}




module.exports.abreTela = abreTela;
module.exports.cadastraCondicaoPagamento = cadastraCondicaoPagamento;

module.exports.confirma = confirma;

function cancela()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmCondicaoPagtoManut.Panel1.PanelBotoes.btnCancela.ClickButton();
}