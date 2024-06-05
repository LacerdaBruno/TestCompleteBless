var Principal = require("Principal");

var frmPedido = Aliases.REPRES.frmPrincipal.MDIClient.frmPedidos;

function abreTelaPedidos()
{
  Principal.alteraAba("Financeiro");
  Principal.abreTelas(Aliases.REPRES.frmPrincipal.btnPedidos, 
  Aliases.REPRES.frmPrincipal.MDIClient.frmPedidos, 
  "Pedidos"); 
}

function cadastrarPedido(){
 var codigoCliente = Project.Variables.PESSOA.Value("CODIGO"); 
 var codigoProduto = Project.Variables.PRODUTO_ESTOQUE.Value("PRODUTO"); 
 var gridItens = Aliases.REPRES.frmPrincipal.MDIClient.frmPedidos.Paginas.tsitems_pedido.GridItens;
 
 frmPedido.sbNovoPedido.Click();
 frmPedido.Paginas.tsdadosDadosBasico.gbCliente.CLIENTE.Keys(codigoCliente);
 frmPedido.Paginas.tsdadosDadosBasico.gbCliente.CLIENTE.Keys("[Tab]");
 Delay(500);

 if (Aliases.REPRES.frmObsPedido.Exists){
  Aliases.REPRES.frmObsPedido.Close(); 
 }
 
 frmPedido.Paginas.tsdadosDadosBasico.gbCliente.VENDEDOR.Keys(codigoCliente);
 frmPedido.Paginas.tsdadosDadosBasico.gbCliente.VENDEDOR.Keys("[Tab]");
 
 frmPedido.Paginas.ClickTab("Itens do Pedido");
    
 gridItens.Click();
 gridItens.Keys("[Home]");
 Delay(500);
  
 gridItens.Keys(codigoProduto);
 gridItens.Keys("[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"
 +"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]"+"[Tab]");
 gridItens.Keys("12");
 
}

