var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var frmBanca = Aliases.SIDI.frmPrincipal.MDIClient.frmBancaManut;
function abreTela() {
	Principal.alteraAba("Cadastros");
	Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnBancas,
		frmBanca,
		"Bancas de pesponto");
}

function cadastraBanca() {
  let contDados = 2; 
  let contSetor = 0; 
  while (contDados < Project.Variables.ContDados) {   
  
	abreTela();
	Principal.clicaNovo();
	frmBanca.PageControlBanca.ClickTab("&Dados Básicos");
	insereNome(Project.Variables.DadosPessoasServicos.nome_banca(contDados));
	inserePessoa(Project.Variables.DadosPessoasServicos.nome(contDados));
	insereSetor(Project.Variables.SetoresBanca.nomeSetor(contSetor));
  insereResponsavel(Project.Variables.DadosPessoasServicos.nome_banca(contDados));
	confirma();
	Principal.clicaEditar();
	confirma();
	Principal.fechaTela();
  
  contDados++;  
  }
}
function insereNome(nome){
  frmBanca.PageControlBanca.tsDadosBanca.pnlDadosBanca.NOME.SetText(nome); 
}

function inserePessoa(pessoa){
  frmBanca.PageControlBanca.tsDadosBanca.pnlDadosBanca.PESSOA.Keys(pessoa+"[Enter]");
}

function insereSetor(setor){
  let novoSetor = setor.replace(/Ã/g,"A");
  frmBanca.PageControlBanca.tsDadosBanca.pnlDadosBanca.SETOR.Keys(novoSetor+"[Enter]");
  Delay(3000);
}
function insereResponsavel(responsavel){
  frmBanca.PageControlBanca.tsDadosBanca.pnlDadosBanca.RESPONSAVEL.SetText(responsavel); 
}
function confirma() {
	frmBanca.PanelBanca.PanelBotoes.btnConfirma.ClickButton();
	Principal.verificaConfirmado(frmBanca.PanelBanca.PanelBotoes.btnConfirma, "Banca");
}
module.exports.abreTela = abreTela;
module.exports.cadastraBanca = cadastraBanca;
module.exports.confirma = confirma;