var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function cadastraGrupoCliente()
{
  abreTela();
  
  Principal.clicaNovo();
  
  insereNome("Geraldo");
  
  confirma();
  
  Principal.clicaEditar();
  
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.clicaEditar();
  cancela();
  
  Principal.fechaTela();
}

function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnGrupoCliente, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoCliente,
   "Grupos de Clientes");
}

function insereNome(nome)
{
    Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoCliente.PageGrupoCliente.tsDados.NOME.SetText(nome);
}

function insereEmail(email)
{
    Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoCliente.PageGrupoCliente.tsDados.E_MAIL.SetText(email);
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoCliente.PanelGrupoCliente.PanelBotoes.btnConfirma, "Grupo de clientes");
}

module.exports.abreTela = abreTela;
module.exports.insereNome = insereNome;
module.exports.insereEmail = insereEmail;
module.exports.confirma = confirma;
module.exports.cadastraGrupoCliente = cadastraGrupoCliente;

function cancela()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmGrupoCliente.PanelGrupoCliente.PanelBotoes.btnCancela.ClickButton();
}