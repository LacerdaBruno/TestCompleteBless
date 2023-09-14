var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function insereFamiliaProdutos()
{
  abreTela(); 
  Principal.clicaNovo(); 
  cadastarFamiliaProdutos();
  confirma();
  Principal.clicaEditar();
  confirma();
  Principal.fechaTela();
}

function abreTela()
{
  Principal.alteraAba("Cadastros");
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnFamiliaProdutos, 
  Aliases.SIDI.frmPrincipal.MDIClient.frmFamiliaProdutos,"Cores");
}

function cadastarFamiliaProdutos(){
 var dbGrid = Aliases.SIDI.frmPrincipal.MDIClient.frmFamiliaProdutos.PageControlFamiliaProdutos.tsPesquisaFamiliaProdutos.PanelGridFamiliaProdutos.dbGridPesquisaFamiliaProdutos;
    
  for(i = 0; i < Project.Variables.FamiliaProdutos.RowCount; i++){
  var Descricao = Project.Variables.FamiliaProdutos.descricao(i);
  var Entrega = Project.Variables.FamiliaProdutos.inicio_entrega(i);
  var Desconto = Project.Variables.FamiliaProdutos.desconto(i);
  var TipoDesconto = Project.Variables.FamiliaProdutos.tipo_desconto(i);
  var QteMinima = Project.Variables.FamiliaProdutos.qte_minima(i);
  var DescontoRet = Project.Variables.FamiliaProdutos.desconto_ret(i);
  
  dbGrid.Keys("[Home]");  
  dbGrid.Keys(Descricao+"[Right]");
  dbGrid.Keys(Entrega+"[Right]");
  dbGrid.Keys(Desconto+"[Right]");
  dbGrid.Keys(TipoDesconto+"[Right]");
  dbGrid.Keys(QteMinima+"[Right]");
  dbGrid.Keys(DescontoRet+"[Right]");
  
  dbGrid.Keys("[Down]");
 }

}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmFamiliaProdutos.PanelBotoesFamiliaProdutos.PanelBotoes.btnConfirma, 'Família Produtos');
}
