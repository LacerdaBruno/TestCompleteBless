function getEstoque(produto) {
	Materiais.abreTela();
	Materiais.pesquisaPorCodigo(produto);
	estoque = aqConvert.StrToInt(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControlItemEstoque.tsDadosItemEstoque.GBquantidades.QTE_DISPONIVEL.wText);
	Principal.fechaTela();
	return estoque;
}
