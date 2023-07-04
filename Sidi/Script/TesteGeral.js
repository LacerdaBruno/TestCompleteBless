//*
var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Pedidos = require("Pedidos");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");
var Fabricas = require("Fabricas");
var CondicaoPagamento = require("CondicaoPagamento");
var GrupoClientes = require("GrupoClientes");
var PessoaServico = require("PessoaServico");
var Cores = require("Cores");
var Formas = require("Formas");
var Grade = require("Grade");
var UnidadesPorVolume = require("UnidadesPorVolume");
var ContaBancaria = require("ContaBancaria");
var Setores = require("Setores");
var Materiais = require("Materiais");
var MovimentavaoEstoqueMateriais = require("MovimentavaoEstoqueMateriais");
var Compras = require("Compras");
var Linha = require("Linha");
var Referencias = require("Referencias");
var Produtos = require("Produtos");
var MovtoEstoqueProdutoAcabado = require("MovtoEstoqueProdutoAcabado");
var EstoqueProdutoAcabado = require("EstoqueProdutoAcabado");
var ProjecaoConsumo = require("ProjecaoConsumo");
var Mapas = require("Mapas");
var Video = require("Video");
var AcompanhamentoFichasProducao = require("AcompanhamentoFichasProducao");
var Bancas = require("Bancas");
var ProdutosMateriais = require("ProdutosMateriais");
var AcompanhamentoTalaoNumeroNumero = require("AcompanhamentoTalaoNumeroNumero");
var Etiquetas = require("Etiquetas");
var RemessaBanca = require("RemessaBanca");
var Consumo = require("Consumo");
//

function TesteCadastros()
{
  try
  {
    Video.gravar();
    App.AbreSidi();
    
    //Cadastros
    Fabricas.testaFabrica();
    Setores.insereSetores();
    CondicaoPagamento.cadastraCondicaoPagamento("Boa condicao", Project.Variables.quantidadeParcelas, 30);
    GrupoClientes.cadastraGrupoCliente();
    PessoaServico.cadastraCliente();
    Bancas.cadastraBanca();
    Cores.insereCor();
    Formas.cadastraForma();
    Grade.cadastraGrade();
    UnidadesPorVolume.cadastraUnidadePorVolume();
    ContaBancaria.cadastraConta();
    
    //Suprimentos
    Materiais.cadastraMateriais();
    MovimentavaoEstoqueMateriais.testaMovimentacoes();
    Compras.testaCompras();
    
    //Produção
    Linha.testaLinhas();
    Referencias.testaReferencias();
    Produtos.testaProdutos();
    MovtoEstoqueProdutoAcabado.testaMovtoEstoqueAcabado();
    Pedidos.testaPedidos();
    ProjecaoConsumo.geraProjecao();
    Mapas.testaMapas();
    Etiquetas.testaEtiquetas();
    AcompanhamentoFichasProducao.testaAcompanhamentoProducao();
    
    //Consumo
    Consumo.testaConsumo();
    
  }
  catch (exception)
  {
    Log.Error("Erro", exception.message);
  }
  finally
  {
    Video.parar();
  }
}
