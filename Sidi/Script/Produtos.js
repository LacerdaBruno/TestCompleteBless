var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

var Calcado = Project.Variables.ControleSistema.Value("EXIBIR_PECA");

function testaProdutos()
{
  //Preenche a tabela de combinações antes de começar o cadastro
  inserirCombinacao();   

  for(y = 0; y < Project.Variables.Produto.RowCount;){
    cadastraProduto(Project.Variables.Produto.referencia(y), 
                    Project.Variables.Produto.descricao(y), 
                    Project.Variables.Produto.unit_volume(y),
                    Project.Variables.Produto.unitario(y),
                    Project.Variables.Produto.unitario_Vista(y),
                    Project.Variables.Produto.cor(y),
                    Project.Variables.Produto.marca(y));  
    
  if(Calcado == "N")
  {
    insereCor(Project.Variables.Produto.cor(y)
    , "Solado", "Palmilha", "marca");
  }   
    y++
    
  }
  Principal.fechaTela();
}

function insereFichaTecnica() {
    var materiaisFichaTecnica = Project.Variables.CodigoMateriais;
    abreFichaTecnica();
    Principal.clicaEditar();
    materiaisFichaTecnica.Reset();

    while (!materiaisFichaTecnica.IsEOF()) {

        // Se o consumo do item for com grade, abre a tela Ver Consumos. Se não, insere o consumo direto no grid.
        if (materiaisFichaTecnica.Value("GERAR_MOVTO_PELA_GRADE") == "T") {
            incluirMaterial(materiaisFichaTecnica.Value("CODIGO_USUARIO"));
            Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Keys("^o");
            Aliases.SIDI.frmModeloConsumoManut.Panel2.btnOpcoes.ClickButton();
            Aliases.SIDI.frmModeloConsumoManut.Panel2.btnOpcoes.PopupMenu.Click("Atualiza grade");

            for (var i = 0; i < Project.Variables.Grade.RowCount; i++) {
                Aliases.SIDI.frmModeloConsumoManut.dbgConsumos.Keys(1+"[Down]");
            }
            Aliases.SIDI.frmModeloConsumo.PanelModeloConsumo.btnConfirmaConsumo.Click();

        } else {
            incluirMaterial(materiaisFichaTecnica.Value("CODIGO_USUARIO"));
            Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Keys(1);
        }
        Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica.Keys("[Down]");
        Project.Variables.CodigoMateriais.Next();
    }
    confirma();
}

function incluirMaterial(mat) {
    let grid = Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsFichaMateriais.GridFichaTecnica;
    grid.Keys("[Home]");
    grid.Keys("[Right]");
    grid.Keys("[Right]");
    Principal.insereDropDownValue(grid.CODIGO_INTERNO, mat);
    grid.Keys("[Right]");
}


function insereCor(cor, solado, palmilha, marca)
{  
  abreAbaCores();
  
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PanelVersao.NavegaVersao.AddVersao.Click();
  
  insereDescCor(cor);
  
  insereCorBase(cor);
  
  insereMarca(marca);
  
  if(Calcado == "N")
  {
  insereSolado(solado);
  inserePalmilha(palmilha);  
  }     

}

function cadastraProduto(referencia, descricao, unitVolume, custo, custoVista, cor, marca)
{
  Principal.alteraAba("Produção")  

  abreTela();
  
  Principal.clicaNovo();

  insereReferencia(referencia);
  
  insereDescricao(descricao);
  
  insereUnidadeVolume(unitVolume);  
  
  insereCusto(custo);
  
  insereCustoVista(custoVista);
  
  abreAbaCores();
  
  insereCor(cor);
  
  insereSetor();
  
  insereFichaTecnica();
  
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
  var unidadeVolume = Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.CalcUnidadesVolume;
  Principal.insereDropDownValue(unidadeVolume, un);
}

function insereCusto(custo)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.PageControl2.lsGeral2.PRECO_VENDA.Keys(custo);
}

function insereCustoVista(custo)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.PageControl2.lsGeral2.PRECO_VENDA_NF.Keys(custo);
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
  var btnCadastrarCombinacao = Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.btnCadastrarCombinacao;

    if (btnCadastrarCombinacao.Exists) 
    {
    Principal.insereDropDownValue(Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.dbDescVersao,cor);  
    }else{
          Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores.tsDadosVersao.dbEditDescVersao.SetText(cor);  
         }  
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

function getProdutoNF()
{
  return Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsDadosModelos.ModelosCadastro.dbProduto.Text;
}

function insereSetor()
{
  var frmModelo = Aliases.SIDI.frmPrincipal.MDIClient.frmModelos;
  
  frmModelo.PageControlModelos.tsVersao.PageControlCores.ClickTab("Setores");  
  
  frmModelo.PageControlModelos.tsVersao.PageControlCores.tsSetoresCor.GridSetores.SETOR_MODELO.Keys("CORTE" + "[Enter]")
  frmModelo.Panel1.PanelBotoes.btnConfirma.Click();
  frmModelo.sbImportarSetores.Click();
  frmModelo.PageControlModelos.tsVersao.PageControlCores.tsSetoresCor.ToolBar3.PopupMenu.Click("De setor");
  Aliases.SIDI.MensagemConfirmacao.btnSim.ClickButton();
}

function inserirCombinacao() {
    var conexao = ADO.CreateADOConnection();
    var produtoCor = "";
    var insertCombinacao = "";
    var selectCombinacao = "";
    var resultadoSelect;
    var registrosCombinacao = "";

    conexao.ConnectionString = "Provider=MSDASQL.1;Persist Security Info=False;Extended Properties=\"DSN=SIDI;Driver=Firebird/InterBase(r) driver;Dbname=C:\\bless\\Bin\\Data\\SIDI\\DADOS\\DADOS.FDB;CHARSET=NONE;UID=SYSDBA;PWD=pmpsyfwr;Client=C:\\Program Files\\Firebird\\Firebird_4_0\\fbclient.dll\"";
    conexao.LoginPrompt = false;

    conexao.Open();

    selectCombinacao = "select codigo from COMBINACAO";
    resultadoSelect = conexao.Execute_(selectCombinacao); // Executa o select e guarda o resultado em "resultadoSelect"
    registrosCombinacao = resultadoSelect.RecordCount; // Obtém o número de registros retornados pelo select

    // Verifica se existe combinações cadastradas
    if (registrosCombinacao > 0) {
        Log.Message("Existem combinações cadastradas.");
    } else {
        for (var z = 0; z < Project.Variables.Produto.RowCount; z++) {
            produtoCor = Project.Variables.Produto.cor(z);

            var codigoCombinacao = z + 1.0;
            insertCombinacao = "INSERT INTO combinacao (CODIGO, DESCRICAO, CODIGO_COMBINACAO) VALUES ('" + codigoCombinacao + "','" + produtoCor + "','" + codigoCombinacao + "')";

            conexao.Execute_(insertCombinacao);
        }
    }
    conexao.Close();
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
module.exports.incluirMaterial = incluirMaterial;
module.exports.pesquisaProdutoPorReferencia = pesquisaProdutoPorReferencia;
module.exports.getProdutoNF = getProdutoNF;

function gerarProdutoNF()
{
  var ref = "TESTE01";
  var pageControlCores = Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsVersao.PageControlCores;
  pesquisaProdutoPorReferencia(ref);
  Principal.clicaEditar();
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("&Cores");
  // importa a grade
  pageControlCores.ClickTab("Código EAN/GTIN");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.sbGerar.Click();
  pageControlCores.tsEAN.Panel11.tblGtin.PopupMenu.Click("Importar grade");
  confirma();
  //Gera produtos NF
  pageControlCores.ClickTab("Código EAN/GTIN");
  pageControlCores.tsEAN.dbgFT_EAN.ClickR();
  pageControlCores.tsEAN.dbgFT_EAN.PopupMenu.Click("Gerar produto NF-e");
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.VScroll.Pos = 0;
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.ClickTab("Listagem das cores de produtos");
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.ClickR(111, 215);
  Aliases.SIDI.frmModeloGTINConsulta.Panel1.PageProduto.tsEan.pnlCondicoes.GroupBox3.GridGTIN.PopupMenu.Click("Marcar Todos");
  Aliases.SIDI.frmModeloGTINConsulta.Panel3.Panel4.btnImportar.ClickButton();
  Aliases.SIDI.TMessageForm.OK.ClickButton();
  Aliases.SIDI.frmModeloGTINConsulta.Panel3.Panel4.btnFechar.ClickButton();
  
  pageControlCores.tsEAN.dbgFT_EAN.ClickR();
  pageControlCores.tsEAN.dbgFT_EAN.PopupMenu.Click("Gerar produto NF-e Integral");
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

function pesquisaProdutoPorReferencia(ref)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.ClickTab("Pes&quisa");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsPesquisa.PanelPesquisa.PanelCriterio.cbPesquisarPor.Keys("re[Enter]");
  Aliases.SIDI.frmPrincipal.MDIClient.frmModelos.PageControlModelos.tsPesquisa.PanelPesquisa.PanelProcurar.edValor.Keys(ref+"[Enter]");
}

module.exports.gerarProdutoNF = gerarProdutoNF;
