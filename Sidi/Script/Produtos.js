var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

function testaProdutos()
{
  for(y = 0; y < Project.Variables.Produto.RowCount; y++){
    cadastraProduto(Project.Variables.Produto.referencia(y), 
                    Project.Variables.Produto.descricao(y), 
                    Project.Variables.Produto.unit_volume(y),
                    Project.Variables.Produto.unitario(y),
                    Project.Variables.Produto.unitario_Vista(y));
  
    insereCor(Project.Variables.Produto.cor(y)
    , "Solado", "Palmilha", "marca");
    insereFichaTecnica();
  }
  Principal.fechaTela();
}

function pesquisaProdutoPorReferencia(ref)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("Pes&quisa");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsPesquisa.PanelPesquisa.PanelCriterio.cbPesquisarPor.Keys("re[Enter]");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsPesquisa.PanelPesquisa.PanelProcurar.edValor.Keys(ref+"[Enter]");
}

function insereFichaTecnica()
{
  abreFichaTecnica();
  
  Principal.clicaEditar();
  
  for(x = 0; x < Project.Variables.Materiais.RowCount; x++){
  
    incluirMaterial(Project.Variables.Materiais.codigo(x));
    
    if(Project.Variables.Materiais.codigo(x) == 1 || Project.Variables.Materiais.codigo(x) == 2){
      insereVerConsumos();      
    }else{
    insereQteMaterial( Project.Variables.Materiais.consumo(x));    
    }
  }
  confirma();
  
}

function insereCor(cor, solado, palmilha, marca)
{  
  abreAbaCores();
  
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PanelVersao.NavegaVersao.AddVersao.Click();
  
  insereDescCor(cor);
  
  insereCorBase(cor);
  
  insereMarca(marca);
  
  insereSolado(solado);

  inserePalmilha(palmilha);
  
  confirma();
}

function cadastraProduto(referencia, descricao, unitVolume, custo, custoVista)
{
  Principal.alteraAba("Produção")  

  abreTela();
  
  Principal.clicaNovo();

  insereReferencia(referencia);
  
  insereDescricao(descricao);
  
  insereUnidadeVolume(unitVolume);  
  
  insereCusto(custo);
  
  insereCustoVista(custoVista);
  
  confirma();
  Principal.clicaEditar();
  confirma();
  
}

function insereReferencia(referencia)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.Referencia.Keys(referencia)
}  

function abreTela()
{
  Principal.alteraAba("Produção");
  
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnProdutosItem,
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos,
  "Produtos");
}

function abreAbaDadosBasicos()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("&Dados Básicos");
}

function insereDescricao(descricao)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.dbDescrModelo.Keys(descricao);
}


function insereUnidadeVolume(un)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.CalcUnidadesVolume.Keys(un);
}

function insereCusto(custo)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.PanelProdutoNF.PRECO_VENDA.Keys(custo);
}

function insereCustoVista(custo)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.PanelProdutoNF.PRECO_VENDA_NF.Keys(custo);
}
function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.Panel1.PanelBotoes.btnConfirma, "Produtos");
  Principal.verificaConfirmado(Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.Panel1.PanelBotoes.btnConfirma, "Produtos");
}

function abreAbaCores()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("&Cores");
}

function insereDescCor(cor)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.dbEditDescVersao.SetText(cor);
}

function insereCorBase(corb)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.PanelMarca.COR_BASE.Keys(corb+"[Enter]");
}

function insereSolado(solado)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.PanelSolado.gbSolado.SOLADO_ITEM_ESTOQUE.Keys(solado+"[Enter]");
}

function inserePalmilha(palmilha)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.PanelSolado.gbPalmilha.PALMILHA_ITEM_ESTOQUE.Keys(palmilha+"[Enter]");
}

function insereMarca(marca)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.PanelMarca.dbMarcaVersao.Keys(marca+"[Enter]");
}

function abreFichaTecnica()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("&Cores");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.ClickTab("Ficha Técnica");
}

function insereQteMaterial(qte)
{
    Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Fields(4).SetText(qte);
}

function incluirMaterial(mat)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Keys("[Down]");
  
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Fields(2).SetText(mat);
}

function getProdutoNF()
{
  return Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.dbProduto.Text;
}

function insereVerConsumos()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Keys("^o");
  Aliases.SIDI.frmModeloConsumoManut.Panel2.btnOpcoes.ClickButton();
  Aliases.SIDI.frmModeloConsumoManut.Panel2.btnOpcoes.PopupMenu.Click("Atualiza grade");
  for(i = 0; i < Project.Variables.grade.RowCount; i++ ){
    Aliases.SIDI.frmModeloConsumoManut.dbgConsumos.Keys(1+"[Up]");
  }
  Aliases.SIDI.frmModeloConsumoManut.Panel1.btnconfirma.ClickButton();
}

module.exports.testaProdutos = testaProdutos;
module.exports.cadastraProduto = cadastraProduto;
module.exports.abreTela = abreTela;
module.exports.insereFichaTecnica = insereFichaTecnica;
module.exports.insereCor = insereCor;
module.exports.insereReferencia = insereReferencia;
module.exports.abreAbaDadosBasicos = abreAbaDadosBasicos;
module.exports.insereDescricao = insereDescricao;
module.exports.insereUnidadeVolume = insereUnidadeVolume;
module.exports.insereCusto = insereCusto;
module.exports.insereCustoVista = insereCustoVista;
module.exports.confirma = confirma;
module.exports.abreAbaCores = abreAbaCores;
module.exports.insereDescCor = insereDescCor;
module.exports.insereCorBase = insereCorBase;
module.exports.insereSolado = insereSolado;
module.exports.inserePalmilha = inserePalmilha;
module.exports.insereMarca = insereMarca;
module.exports.abreFichaTecnica = abreFichaTecnica;
module.exports.insereQteMaterial = insereQteMaterial;
module.exports.incluirMaterial = incluirMaterial;
module.exports.insereVerConsumos = insereVerConsumos;
module.exports.pesquisaProdutoPorReferencia = pesquisaProdutoPorReferencia;
module.exports.getProdutoNF = getProdutoNF;

function gerarProdutoNF(ref)
{
  pesquisaProdutoPorReferencia(ref);
  Principal.clicaEditar();
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("&Cores");
  // importa a grade
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.ClickTab("Código EAN/GTIN");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.sbGerar.Click(105, 9);
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsEAN.Panel11.tblGtin.PopupMenu.Click("Importar grade");
  confirma();
  //Gera produtos NF
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.ClickTab("Código EAN/GTIN");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsEAN.dbgFT_EAN.ClickR();
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsEAN.dbgFT_EAN.PopupMenu.Click("Gerar produto NF-e");
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.VScroll.Pos = 0;
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.ClickTab("Listagem das cores de produtos");
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.ClickR(111, 215);
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.PopupMenu.Click("Marcar Todos");
  Aliases.SIDI.frmModeloGTINConsulta.Panel3.Panel4.btnImportar.ClickButton();
  Aliases.SIDI.TMessageForm.OK.ClickButton();
  Aliases.SIDI.frmModeloGTINConsulta.Panel3.Panel4.btnFechar.ClickButton();
  
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsEAN.dbgFT_EAN.ClickR();
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsEAN.dbgFT_EAN.PopupMenu.Click("Gerar produto NF-e Integral");
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.VScroll.Pos = 0;
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.ClickTab("Listagem das cores de produtos");
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.ClickR(67, 200);
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.PopupMenu.Click("Marcar Todos");
  Aliases.SIDI.frmModeloGTINConsulta.Panel3.Panel4.btnImportar.ClickButton();
  Aliases.SIDI.TMessageForm.OK.ClickButton();
  Aliases.SIDI.frmModeloGTINConsulta.Panel3.Panel4.btnFechar.ClickButton();
  
  Log.Checkpoint("Produto NF e NF integral gerados corretamente",'', 500, null, Sys.Desktop);
  
  Principal.fechaTela();
}
module.exports.gerarProdutoNF = gerarProdutoNF;