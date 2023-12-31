﻿var Principal = require("Principal");

function testaFabrica()
{
 cadastraFabrica("Fabrica de testes"); 
 Principal.clicaEditar();
 confirma();
 Principal.clicaEditar();
 cancela();
 Principal.fechaTela();
}

function AbreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnFabricas,
   Aliases.SIDI.frmPrincipal.MDIClient.frmFabricaManut,
    "Fabricas");
}

function cadastraFabrica(nome)
{
  AbreTela();
  Principal.clicaNovo();  
  // Insere o nome da fabrica
  Aliases.SIDI.frmPrincipal.MDIClient.frmFabricaManut.PageControlFabricas.tsPesquisaFabricas.PanelGridFabricas.dbGridPesquisaFabricas.Keys(nome);
  
  // Confirma
  confirma();
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmFabricaManut.Panel1.PanelBotoes.btnConfirma, "Fabrica");
}

module.exports.testaFabrica = testaFabrica;
module.exports.AbreTela = AbreTela;
module.exports.cadastraFabrica = cadastraFabrica;
module.exports.confirma = confirma;

function cancela()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmFabricaManut.Panel1.PanelBotoes.btnCancela.ClickButton();
}