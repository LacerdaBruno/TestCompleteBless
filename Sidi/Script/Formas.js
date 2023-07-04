var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function cadastraForma()
{
  let contDados = 3; 
  abreTela();
  
  Principal.clicaNovo();
  insereDescricao("FORMA PADRAO");
  insereReferencia("PADRAO");  
  insereFornecedor(Project.Variables.DadosPessoasServicos.CGC(contDados));  
  insereMaterial("PVC");  
  insereGrade();
  
  confirma();
  Principal.clicaEditar();
  confirma();
  
  Principal.fechaTela();
}

function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnFormas,
  Aliases.SIDI.frmPrincipal.MDIClient.frmForma,
  'Formas');
}

function insereReferencia(referencia)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmForma.PageControlForma.tsforma.dbreferencia.Keys(referencia);
}

function insereDescricao(descricao)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmForma.PageControlForma.tsforma.dbdescricao.Keys(descricao);
}

function insereMaterial(material)
{
    Aliases.SIDI.frmPrincipal.MDIClient.frmForma.PageControlForma.tsforma.dbmaterial.Keys(material);
}

function insereGrade(){
  var dbGrid = Aliases.SIDI.frmPrincipal.MDIClient.frmForma.PageControlForma.tsforma.GrupoGrade;
  dbGrid.Keys("[Home]");

  for(i = 0; i < Project.Variables.Grade.RowCount; i++){
    dbGrid.dbGrade.Keys(Project.Variables.Grade.tamanho(i) + "[Down]");
  }
}

function insereFornecedor(fornecedor)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmForma.PageControlForma.tsforma.Fornecedor.btnFornecedor.Click()
  Aliases.SIDI.PesquisaFornecedor.pesquisa.Keys(fornecedor);
  Aliases.SIDI.PesquisaFornecedor.btnFornecedorOK.ClickButton();
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmForma.Panel1.PanelBotoes.btnConfirma, "Forma");
}

module.exports.abreTela = abreTela;
module.exports.insereReferencia = insereReferencia;
module.exports.insereDescricao = insereDescricao;
module.exports.insereMaterial = insereMaterial;
module.exports.insereGrade = insereGrade;
module.exports.insereFornecedor = insereFornecedor;
module.exports.confirma = confirma;
module.exports.cadastraForma = cadastraForma;