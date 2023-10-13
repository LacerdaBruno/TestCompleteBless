var Materiais = require("Materiais");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

var estoqueEsperado = 0;
var movtoMateriais = Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoque.PageControl1.tsDados;


function testaMovimentacoes(){
  // Cadastra uma movimentação de entrada, exlcui e faz a validação se o estoque ficou como antes
  estoqueAnterior = getEstoque(21880);
  cadastraMovimentacao("ENTRADA ESTOQUE", 21880, "",10);
  Principal.excluir();
  validaEstoque(estoqueAnterior, getEstoque(21880));
  
  // Cadastra uma movimentação de entrada e uma de saida e faz a validação se o estoque ficou como antes
  estoqueAnterior = getEstoque(21880);
  cadastraMovimentacao("ENTRADA ESTOQUE", 21880, "",10);
  cadastraMovimentacao("SAÍDA ESTOQUE", 21880, "",10);
  validaEstoque(estoqueAnterior, getEstoque(21880));
  
  // Cadastra movimentação de cada material 
  for(t = 0; t < Project.Variables.Materiais.RowCount; t++){
    cadastraMovimentacao("ENTRADA ESTOQUE",Project.Variables.Materiais.codigo(t), Project.Variables.Materiais.tipo(t), 10);  
  }

  
  Principal.fechaTela();
}

function cadastraMovimentacao(tipoDoc, material, tipoMaterial, quantidade){
  estoque = 0;
  Principal.alteraAba("Suprimentos");
  estoque = getEstoque(material);
  abreTela();
  Principal.clicaNovo();
  insereTipoDoc(tipoDoc);
  insereFabrica("Fabrica de testes");
  insereMaterial(material);
  
  if(tipoDoc == "SAÍDA ESTOQUE"){
    estoqueEsperado = estoque - quantidade;
  }else{
    estoqueEsperado = estoque + quantidade; 
  }
  
  
  if(tipoMaterial == "SOLADO" || tipoMaterial == "PALMILHA"){
      insereGrade();
      confirma();
      validaEstoqueGrade(material);
    }else{
      insereQuantidade(quantidade);
      confirma();
      validaEstoque(estoqueEsperado,getEstoque(material));
    }
    
    
    
}

function validaEstoqueGrade(produto)
{
  Materiais.abreTela();
  Materiais.pesquisaPorCodigo(produto);
  
  for(i = 0; i < Project.Variables.grade.RowCount; i++){
    qteEstoque =  Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControl1.tsDados.gbEstoqueDisponivel.dbGridEstoque.Fields(3).Value;
    qteCorreta = aqConvert.StrToInt(Project.Variables.grade.qte(i));
    if(qteEstoque != qteCorreta){
      Log.Warning("Estoque da numeração " + Project.Variables.grade.numero(i) +
       " está incorreto. Eperado: " + qteCorreta +
       " atual: " + qteEstoque
      ,'', 500, null, Sys.Desktop);
      break;
    }
    Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControl1.tsDados.gbEstoqueDisponivel.dbGridEstoque.Keys("[Down]");
  }
  
  Principal.fechaTela();
  
}

function validaEstoque(esperado, estoque)
{
  if(esperado == estoque){
      Log.Checkpoint("Estoque validado!");      
    } else{
      Log.Warning("Estoque com quantidade errada. Quantidade atual:" + estoque + 
                  " quantidade esperada:" + esperado);
    }  
}


function getEstoque(produto)
{
  Materiais.abreTela();
  Materiais.pesquisaPorCodigo(produto);
  estoque = aqConvert.StrToInt(Aliases.SIDI.frmPrincipal.MDIClient.frmItemEstoque.PageControl1.tsDados.GBquantidades.QTE_DISPONIVEL.wText);
  Principal.fechaTela();
  return estoque;
}

function abreTela()
{
  Principal.alteraAba("Suprimentos");  

  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnMovimentacaoMateriais,
  Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoque,
  "Movimentação de estoque e materiais"
  );
}

function insereTipoDoc(doc){
  movtoMateriais.PanelDadosBasicos.TIPO_DOC.Keys(doc+"[Enter]");  
}

function insereFabrica(fabrica){
    movtoMateriais.PanelDadosBasicos.FABRICA.Keys(fabrica+"[Enter]");
}

function insereMaterial(codigo){
  movtoMateriais.PanelItens.dbgrid.Click(60, 40);
  movtoMateriais.PanelItens.dbgrid.Keys(codigo + "[Tab]");
}

function insereQuantidade(qte){
  movtoMateriais.PanelItens.dbgrid.Fields(9).SetText(qte);
}


function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoque.Panel1.PanelBotoes.btnConfirma , "Movimentção de materiais" )
}

function insereMotivo(motivo)
{
  movtoMateriais.PanelDadosBasicos.MOTIVO.Keys(motivo);
}

function insereGrade(){
  movtoMateriais.PanelItens.dbgrid.Keys("[F10]");
  
  estoqueEsperado = 0;
  
  for(i=0; i < Project.Variables.grade.RowCount ; i++){
   Aliases.SIDI.frmMovtoEstoqueGrade.Grid.Keys(Project.Variables.grade.qte(i) +"[Right]"); 
   estoqueEsperado++;
  }
  Aliases.SIDI.frmMovtoEstoqueGrade.Panel1.btnconfirma.ClickButton();
}
module.exports.abreTela = abreTela;

function validaMovimentacaoMapa(mapa)
{
  abreTela();
  Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoque.Panel1.PanelAux.btnPesquisaAvancada.ClickButton();
  Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoqueConsulta.pnlFiltros.GroupBox4.gbProducao.MAPA.SetText(mapa);
  Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoqueConsulta.pnlFiltros.btnAplicarCriterios.ClickButton();
  resultadoPesquisa = Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoqueConsulta.PaginasImprimirMovimentacaoMateriais.tabMovimentacoesSelecionadas.ResultadoPesquisa.Fields(0).Value;
  Aliases.SIDI.frmPrincipal.MDIClient.frmMovtoEstoqueConsulta.Panel3.Panel2.btnFechar.ClickButton();
  Principal.fechaTela(); 
  if(resultadoPesquisa != 0){
    return false;
  }
  else
  {
    return true;
  }
  

}
module.exports.validaMovimentacaoMapa = validaMovimentacaoMapa;