var Principal = require("Principal");

var contaBancaria = Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControlContaBancaria;

function cadastraConta(){
  let ContDados = 0;
  abreTela();
  
  for(i = 1; i < Project.Variables.StatusSort.RowCount; i++){//Estou iniciando do 1 porque não dessejo cadastrar pelo F10.
    statusSort(Project.Variables.StatusSort.StatusSort(i));
    Principal.clicaNovo();
    
    insereTitular(Project.Variables.ContaBancaria.titular(ContDados));
    insereAgencia(Project.Variables.ContaBancaria.agencia(ContDados));
    insereNumero(Project.Variables.ContaBancaria.numero(ContDados));
    insereBanco(Project.Variables.ContaBancaria.banco(ContDados));
    insereSenha(Project.Variables.ContaBancaria.senha(ContDados));
  
    confirma();
    Principal.clicaEditar();
    confirma();

    abreTelaPesquisa();
  }  
  Principal.fechaTela();
}


function abreTela(){
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnContaBancaria,
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria,
  "Conta Bancaria");
}

function statusSort(stausSort){
  switch(stausSort){
    case "F10":
      contaBancaria.tsPesquisaContaBancaria.PanelGridContaBancaria.dbGridContaBancaria.Keys("[F10]");      
      break;
    case "F11":
      contaBancaria.tsPesquisaContaBancaria.PanelGridContaBancaria.dbGridContaBancaria.Keys("[F11]");      
      break;
    case "F12":
      contaBancaria.tsPesquisaContaBancaria.PanelGridContaBancaria.dbGridContaBancaria.Keys("[F12]");      
      break;
  }
}

function teste(){
contaBancaria.tsPesquisaContaBancaria.PanelGridContaBancaria.dbGridContaBancaria.Keys("[F12]");  
}

function insereTitular(titular){
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControlContaBancaria.tbsContaBancaria.TITULAR.Keys(titular);
}

function insereAgencia(agencia){
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControlContaBancaria.tbsContaBancaria.AGENCIA.Keys(agencia);  
}

function insereNumero(numero){
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControlContaBancaria.tbsContaBancaria.NUMERO.Keys(numero);
}

function insereBanco(banco){
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControlContaBancaria.tbsContaBancaria.CODIGO_BANCO.Keys(banco+"[Tab]");  
}

function insereSenha(senha){
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControlContaBancaria.tbsContaBancaria.SENHA.Keys(senha);
}

function confirma(){
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.Panel1.PanelBotoes.btnConfirma, "Conta Bancaria");
  Aliases.SIDI.TMessageForm2.OK.ClickButton();
  Principal.verificaConfirmado(Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.Panel1.PanelBotoes.btnConfirma, "Conta Bancaria");
}

function abreTelaPesquisa(){
  Aliases.SIDI.frmPrincipal.MDIClient.frmContaBancaria.PageControl1.ClickTab("Pes&quisa");
}

module.exports.cadastraConta = cadastraConta;
module.exports.abreTela = abreTela;
module.exports.statusSort = statusSort;
module.exports.insereTitular = insereTitular;
module.exports.insereAgencia = insereAgencia;
module.exports.insereNumero = insereNumero;
module.exports.insereBanco = insereBanco;
module.exports.insereSenha = insereSenha;
module.exports.confirma = confirma;
module.exports.abreTelaPesquisa = abreTelaPesquisa;
module.exports.teste = teste;