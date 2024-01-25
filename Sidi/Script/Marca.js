function cadastrarMarca()
{
  Aliases.SIDI.frmPrincipal.MainMenu.Click("Cadastros|Marcas");
  Aliases.SIDI.frmPrincipal.sbNovo.Click();
  
  var frmMarca = Aliases.SIDI.frmPrincipal.MDIClient.frmMarca;
  frmMarca.PageControlMarca.tsDadosMarca.NOME_MARCA.Keys("Marca");
  frmMarca.PanelBotoesMarca.PanelMarca.btnConfirma.Click();
  Aliases.SIDI.frmPrincipal.sbSair.Click();
}