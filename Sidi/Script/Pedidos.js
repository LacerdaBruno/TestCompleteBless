var Validacoes = require("Validacoes");
var Visualizacoes = require("Visualizacoes");
var Visualizacoes = require("Visualizacoes");
var Relatorios = require("Relatorios");
var Principal = require("Principal");

function testaPedidos()
{
  cadastraPedido();
  fazEntrega();
  gerarParcelas();
  cadastraPedido();
  cadastraPedido();
  Project.Variables.pedido = getNumeroPedido();
  Principal.fechaTela();
}

function getNumeroPedido(){
  //return Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelPedido.NUMERO_CLIENTE.Text;
  return Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelPedido.NUMERO_CLIENTE_PROD.Text;
}

function cadastraPedido(){
  total = 0;  

  razaoSocial = Project.Variables.DadosPessoasServicos.nome(Project.Variables.ContDados)  

   abrePedidos()
  
  Principal.clicaNovo();

  insereCliente(razaoSocial);
  
  insereRepresentante(razaoSocial);
  
  insereTransportadora(razaoSocial);
  
  alteraAba("produtos");
  
 // for(p = 0; p < Project.Variables.Produto.RowCount; p++){
    //if(p>0){
      //  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Keys("[Down]");
    //}
    p =0;
    insereProduto(Project.Variables.Produto.referencia(p), Project.Variables.Produto.cor(p), p + 1);
    Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(8).SetText(1);
    insereGrade();
    total += validaValores();
  //}
  confirma();
  Principal.clicaEditar();
  confirma();
  
  // Faz a validação do valor total do pedido com o somatorio dos itens
  totalPedido = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelTotais.gbTotais.editVrCalculado.Text;
  /*if(aqConvert.StrToFloat(totalPedido) != aqConvert.StrToFloat(total)){
    Log.Warning("Valor total do pedido difere do somatorio dos itens total esperado: " + total + " valo calculado: " + totalPedido);
  }else{
    Log.Checkpoint("Valores calculados no pedido validados");
  }*/
}

function validaValores()
{  
  qte = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(7).Value;
  unit = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(9).Value;
  totalItem = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(10).Value;
  //Arredondamentos
  totalEsperado = aqString.Format("%0.2f", qte * unit);
  totalItem = aqString.Format("%0.2f", totalItem);
  
  if(totalItem != totalEsperado){
    Log.Warning("Valor total do item não bate com o somatorio");
  }
  return qte * unit; 
}

function insereGrade()
{
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Keys("[F10]");
  Aliases.SIDI.frmInformarGradeVolume.Panel1.gbItens.GRID_ITENS.Keys("[Right]")
  for(i = 0; i < Project.Variables.grade.RowCount; i++){
    Aliases.SIDI.frmInformarGradeVolume.Panel1.gbItens.GRID_ITENS.Keys(Project.Variables.grade.qte(i) + "[Right]");
  }
  Aliases.SIDI.frmInformarGradeVolume.Panel3.btnContinuar.ClickButton();
}

function insereProduto(produto, cor, codigo){
  let i = 0;
    let produtoAtual = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(2).Text;
  while(aqString.Find(produtoAtual,produto) == -1){
    // Volta para o campo do produto antes de inserir novamente -- [REF - PRODUTO - COMBINAÇÃO/COR - CÓDIGO PROD]
    if(i > 0){
     Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Keys("[Left][Left]" + produto + "[Tab]");
     Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Keys(cor + "[Tab]");
    }else{
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Keys(produto + "[Tab]");
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Click();
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Keys(cor+"[Tab]");
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Click();
    }
    produtoAtual = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(2).Text;
    i++; 
  }
}

function pesquisaPedido(pedido)
{
  alteraAba("pesquisa");
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsPesquisa.PanelPesquisa.PanelProcurar.txPesquisa.SetText(pedido);
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsPesquisa.PanelPesquisa.PanelClassificar.btnPesquisar.ClickButton();

}

function fazEntrega(){
  // Faz a entrega
  alteraAba("Entregas");
  Principal.clicaEditar();
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsEntregas.gbEntregas.pnlEntrega.pnlEntregaTitulo.btnEntrega.ClickButton();
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.Panel1.PanelBotoes.btnConfirma.ClickButton();
  
  //Valida a situação do pedido
  numPedido = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.Entregas.Panel.NUMERO_CLIENTE_ENTREGA.Text;
  validaSituacao("ENTREGUE",numPedido);
  validaSituacaoItens("ENTREGUE",numPedido);
  
}

function gerarParcelas()
{
  alteraAba("Entregas");
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsEntregas.Vencimentos.Panel4.btnParcelas.ClickButton()
  Principal.confirmaAviso();
  
  //Valida situação
  numPedido = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.Entregas.Panel.NUMERO_CLIENTE_ENTREGA.Text;
  
  validaSituacao("FATURADO",numPedido);
  validaSituacaoItens("FATURADO",numPedido);
  
  //Valida somatorio das parcelas
  alteraAba("produtos");
  totalPedido = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelTotais.gbTotais.editVrCalculado.Text;
  totalParcelas = 0;
  qteParcelas = Project.Variables.quantidadeParcelas;
  alteraAba("entregas");
  for(i = 0; i < qteParcelas; i++){
    totalParcelas += aqConvert.StrToFloat(Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsEntregas.Vencimentos.gdVencimentos.Fields(5).Value);
    Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsEntregas.Vencimentos.gdVencimentos.Keys("[Down]"); 
  }
  totalParcelas = aqString.Format("%0.2f",totalParcelas);
  totalPedido = aqString.Format("%0.2f",totalPedido);
  
  if(totalParcelas == totalPedido){
    Log.Checkpoint("Somatorio das parcelas bate com total do pedido");
  }
  else
  {
    Log.Warning("Somatorio das parcelas não bate com total do pedido, valor esperado: " + totalPedido + ", total das parcelas: "+totalPedido,'', 500, null, Sys.Desktop );
  } 
  
  
  //Valida numero NF e Serie
 // numPedido = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelPedido.NUMERO.Text;
  numPedido = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelPedido.NUMERO_PROD.Text;
  alteraAba("Dados basicos");
  numNF = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsdados.dbacompanhamento.NOTA_FISCAL.Text;
  serie = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsdados.dbacompanhamento.SERIE_NF.Text;
  if(serie == "PA" && numNF == numPedido){
    Log.Checkpoint("Numero da parcela validado com sucesso!");
  }else
  {
    Log.Warning("Numero da parcela ou serie incorreto, valores esperados: " + numPedido + " PA" +
                ", valores atuais: " + numNF + " " + serie);
  }
  
}

/*
* Pesquisa o pedido e retorna a situação
*/
function getSituacao()
{  
  alteraAba("dados basicos");
  
  return Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsdados.dbacompanhamento.SITUACAO.Text;
}

function validaSituacao(situacaoEsperada, pedido)
{
  abrePedidos();
  
  pesquisaPedido(pedido);
  
  situacaoAtual = getSituacao(pedido);
  
  if(situacaoAtual == situacaoEsperada){
    Log.Checkpoint("Situação do pedido validada situação esperada: "+ situacaoEsperada + ", Situação atual: "+situacaoAtual);
  }else
  {
    Log.Warning("Situação do pedido incorreta situação esperada: "+ situacaoEsperada + ", Situação atual: "+situacaoAtual);
  }
}

function validaSituacaoItens(situacaoEsperada, pedido)
{
  abrePedidos();
  
  pesquisaPedido(pedido);
  alteraAba("produtos");
  
  for(i = 0; i < Project.Variables.Produto.RowCount; i++){
    situacaoAtual = Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.dbgPedido.Fields(15).Value;  
  
    if(situacaoAtual == situacaoEsperada){
      Log.Checkpoint("Situação do Item pedido validada situação esperada: "+ situacaoEsperada + ", Situação atual: "+situacaoAtual);
    }else
    {
      Log.Warning("Situação do Item pedido incorreta situação esperada: "+ situacaoEsperada + ", Situação atual: "+situacaoAtual);
      break;
    } 
  }
}

function abrePedidos()
{
  Principal.alteraAba("Produção");
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnPedidos,
   Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos, "Pedidos");
}

function abrePesquisaAvancada()
{
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.Panel1.PanelAux.btnPesquisaAvancada.ClickButton();
}

function alteraAba(aba)
{
  aba = aqString.ToLower(aba);
  switch(aba){
    case "dados basicos":
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.ClickTab("&Dados Básicos");
      break;
    case "produtos":
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.ClickTab("Prod&utos");
      break;
    case "entregas":
      Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.ClickTab("Entregas");
      break
    case "pesquisa":
       Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.ClickTab("Pes&quisa");
      break
    default:
      Log.Error("Opção invalida!");
  }
}

function insereRepresentante(repres)
{
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsdados.gbCliente.PanelDadosPedido.CGC_REPRESENTANTE.Keys("r");
  Aliases.SIDI.SelecionaCliente.wwIncrementalSearch1.Keys(repres+"[Enter]");
  Aliases.SIDI.TMessageForm3.OK.ClickButton();
}

function insereTransportadora(transp)
{
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsdados.gbCliente.CGC_TRANSPORTADORA.Keys("r");
  Aliases.SIDI.SelecionaCliente.wwIncrementalSearch1.Keys(transp+"[Enter]");
}

function insereCliente(cliente)
{
  Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsdados.gbCliente.CGC_CLIENTE.Keys("d");
  Aliases.SIDI.SelecionaCliente.wwIncrementalSearch1.Keys(cliente+"[Enter]");
}

function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.Panel1.PanelBotoes.btnConfirma,
  "Pedido");
}

/*
*
*
*  ****** Funções da pesquisa avançada  ********
*
*/

/*
*   Visualiza TODOS RELATORIOS DE PESQUISA AVANÇADA
*/
function pesquisaAvancadaVisualizaRelatorios()
{
  var consumo =  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnConsumo;
  var pedido = Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnPedido;
  var relacao =  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnRelacao;
  var visualizafaturamento = Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelFaturamento.btnVisualizarFaturamento;
  var i = 0;
  
  // Percorre todos os classificar visualializando todos os relatorios 
  while(i < Project.Variables.ClassificarPesquisaAvancadaPedidos.RowCount)
  {
    
    abrePesquisaAvancada();
    
    // Altera o classificar
    classificarPor(Project.Variables.ClassificarPesquisaAvancadaPedidos.Nome(i));
    
    Log.Checkpoint('**CLASSIFICAR ALTERADO PARA CLASSIFICAR POR' + Project.Variables.ClassificarPesquisaAvancadaPedidos.Nome(i));
    
    setDataCadastro('01012020', '31122020');  
    aplicaCriterios();    
    selecionaAba('Pedidos selecionados');
      
    marcaTodos();
    
    visualizaRelatoriosAbaPedido()
    
    // altera a aba para Detalhes pedido
    selecionaAba('Faturamento');
    
    
    // Visualiza todos relatorios da aba Faturamento   
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Sub-Linha');   
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cancelamento|Cancelamento/Motivo');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cancelamento|Cancelamento/Produto');   
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Simples|Modelo I');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Simples|Modelo II');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Cliente');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Cliente/Referência');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Referência');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Referência/Preço Unitário');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Linha');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Pedido/Ref. não entregues');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Entregas|Detalhado');    
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Prazo Médio|Faturamento do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Prazo Médio|Condição Pagto');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Fábrica/Cliente');   
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mês/Semana|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mês/Semana|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mês/Semana|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mês/Semana|Pela data de entrega');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Marca/Referência');   
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Palmilha/Cor');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Simples');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal|Pela data do pedido');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal|Pela data do cadastro');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal|Pela data da emissão NF');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal|Pela data de entrega');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal/Cidade/Representante|Pela data do pedido');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal/Cidade/Representante|Pela data do cadastro');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal/Cidade/Representante|Pela data de emissão NF');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Mensal/Cidade/Representante|Pela data de entrega');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Cidade/Cliente/Data');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Anual|Pela data do pedido');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Anual|Pela data do cadastro');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Anual|Pela data de emissão NF');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cidade|Anual|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Pedido/Cliente|Modelo I');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Pedido/Cliente|Modelo II');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mapa/Produto Agrupado');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mapa/Cliente|Modelo I');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mapa/Cliente|Modelo II');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mesoregião|Mesoregião/Estado');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Mesoregião|Mesoregião/Estado/Macroregião');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Simples');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Mensal|Pela data do pedido');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Mensal|Pela data do cadastro');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Mensal|Pela data da emissão NF');
//    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Mensal|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Estado/Referência');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Estado/Representante');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Anual|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Anual|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Anual|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Estado|Anual|Pela data de entrega');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Simples');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Linha/Cor');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Linha/Referência|Modelo I');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Linha/Referência|Modelo II');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Linha/Sub-Linha');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Anual|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Anual|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Anual|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Linha|Anual|Pela data de entrega');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Solado|Simples');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Solado|Solado/Cor');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Solado|Solado/Cor/Grade');    
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor Base');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor + Por Cliente');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor|Simples');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor|Mensal|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor|Mensal|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor|Mensal|Pela data da emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor|Mensal|Pela data da entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Cor|Cor/Referência');   
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Simples');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Diário|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Diário|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Semanal');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Semanal|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Semanal|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Semanal|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Semanal|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data do pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data do cadastro');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data de emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data de entrega');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Cota mês representante');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Estado');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente/Pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente/Comissão');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Referência');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Grupo');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Emissão NF');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cidade');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Referência/Pedido');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente/Coleção');
    Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Resumo Comparativo');
    
    pesquisaAvancadaFechar();
    
    // incrementa o contador 
    i++;
  }
}



/*
*  Insere data inicial e fim para filrar os pedidos 
*/
function setDataCadastro(dataIni, dataFim)
{
  var objeto;
  
  objeto = Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Filtros.FiltrosPesquisa.PainelFiltros.DataCadastro; 
  
  objeto.DataCadastroInicial.Keys(dataIni);
  
  objeto.DataCadastroFim.Keys(dataFim);
}


/*
*   Aplica Criterios na pesquisa avançada
*/
function aplicaCriterios()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Filtros.btnAplicarCriterios.ClickButton();
}

/*
*   Altera o Classificar Por da pesquisa avançada
*/
function classificarPor(classificar)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Filtros.FiltrosPesquisa.PainelFiltros.gbClassificarPor.CLASSIFICAR_POR.Edit.Keys(classificar);
  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Filtros.FiltrosPesquisa.PainelFiltros.gbClassificarPor.CLASSIFICAR_POR.Edit.Keys("[Tab]");
}

/*
*   Altera a aba dos resultados da pesquisa
*/
function selecionaAba(aba)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Paginas2.ClickTab(aba);
}

/*
*   Clica com botão direirto e marca todos os pedidos
*/
function marcaTodos()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Paginas2.tsPedidos.dbgResultado.ClickR();
  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Paginas2.tsPedidos.dbgResultado.PopupMenu.Click("Marcar Todos");
}


/*
*   Recebe o nome do CheckBox e marca se estiver desmarcado ou caso contrarios desmarca
*/
function clicaCheckBoxPesquisaAvancada(cb)
{
  var painel;
  
  painel = Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.Panel3.PanelAux;
  
  switch ( cb )
  {
    case 'Um por pagina' :
      if(painel.cbUmPorPagina.wState == 1){
      painel.cbUmPorPagina.ClickButton(cbUnchecked);
      }
      else
      {
      painel.cbUmPorPagina.ClickButton(cbChecked);  
      }
      break;
    
    case 'Exibir totais por produto' :
      if(painel.cbTotalProduto.wState == 1){
      painel.cbTotalProduto.ClickButton(cbUnchecked);
      }
      else
      {
      painel.cbTotalProduto.ClickButton(cbChecked);  
      }
      break;
    
    case 'Exibir intens cancelados' :
      if(painel.cbItensCancelados.wState == 1){
      painel.cbItensCancelados.ClickButton(cbUnchecked);
      }
      else
      {
      painel.cbItensCancelados.ClickButton(cbChecked);  
      }
      break;
      
    case 'Exibir historico' :
      if(painel.cbHistoricoClientes.wState == 1){
      painel.cbHistoricoClientes.ClickButton(cbUnchecked);
      }
      else
      {
      painel.cbHistoricoClientes.ClickButton(cbChecked);  
      }
      break;
      
    case 'Filtrar itens' :
      if(painel.cbFiltrarItens.wState == 1){
      painel.cbFiltrarItens.ClickButton(cbUnchecked);
      }
      else
      {
      painel.cbFiltrarItens.ClickButton(cbChecked);  
      }
      break;
      
    case 'Filtrar alterações de pedidos do sidi mobile' :
      if(painel.cbAltSidiMobile.wState == 1){
      painel.cbAltSidiMobile.ClickButton(cbUnchecked);
      }
      else
      {
      painel.cbAltSidiMobile.ClickButton(cbChecked);  
      }
      break;
  }
}


function pesquisaAvancadaFechar()
{   
  
  if(Validacoes.CheckExists(Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelFaturamento.btnFecharFaturamento, 200))
  {
    Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelFaturamento.btnFecharFaturamento.ClickButton();
  } 
  else if(Validacoes.CheckExists(Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnFechar, 200)) 
  {
   Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnFechar.ClickButton(); 
  }  
  
}

function visualizaRelatoriosAbaPedido(){
  Visualizacoes.visualizarBotaoModelo(consumo, 'Modelo I');
  Visualizacoes.visualizarBotaoModelo(consumo, 'Modelo II');   
    
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Produção');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Faturamento');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Cliente');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Exportação|Lista de Embarque');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Faturamento');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Cliente');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Exportação|Lista de Embarque');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Exportação|Fatura Comercial');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Distribuição');
  Visualizacoes.visualizarBotaoModelo(pedido, 'Para Produção');
    
  Visualizacoes.visualizarBotaoModelo(relacao, 'Modelo I');
  Visualizacoes.visualizarBotaoModelo(relacao, 'Modelo II');
  Visualizacoes.visualizarBotaoModelo(relacao, 'Peso Líquido/Bruto');
}

function teste(){

  var consumo =  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnConsumo;
  var pedido = Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnPedido;
  var relacao =  Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelPedido.btnRelacao;
  var visualizafaturamento = Aliases.SIDI.frmPrincipal.MDIClient.frmPesquisaAvancadaPedido.PainelInferior.Botoes.PanelFaturamento.btnVisualizarFaturamento;
  var i = 0;
 
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Simples');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Diário|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Diário|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Semanal');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mês/Semana|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mês/Semana|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mês/Semana|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mês/Semana|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Cliente|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Linha|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Produto|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Mensal/Representante/Cidade|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data do pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data do cadastro');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data de emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Anual|Pela data de entrega');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Cota mês representante');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Estado');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente/Pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente/Comissão');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Referência');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Grupo');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Emissão NF');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cidade');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Referência/Pedido');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Representante/Cliente/Coleção');
  Visualizacoes.visualizarBotaoModelo(visualizafaturamento, 'Por Representante|Resumo Comparativo');
}


module.exports.abrePedidos = abrePedidos;
module.exports.abrePesquisaAvancada = abrePesquisaAvancada;
module.exports.pesquisaAvancadaVisualizaRelatorios = pesquisaAvancadaVisualizaRelatorios;
module.exports.setDataCadastro = setDataCadastro;
module.exports.aplicaCriterios = aplicaCriterios;
module.exports.selecionaAba = selecionaAba;
module.exports.marcaTodos = marcaTodos;
module.exports.clicaCheckBox = clicaCheckBoxPesquisaAvancada;
module.exports.pesquisaAvancadaFechar = pesquisaAvancadaFechar;

module.exports.pesquisaPedido = pesquisaPedido;
module.exports.getSituacao = getSituacao;
module.exports.alteraAba = alteraAba;
module.exports.testaPedidos = testaPedidos;
module.exports.getNumeroPedido = getNumeroPedido;
module.exports.cadastraPedido = cadastraPedido;
module.exports.validaValores = validaValores;
module.exports.insereGrade = insereGrade;
module.exports.insereProduto = insereProduto;
module.exports.fazEntrega = fazEntrega;
module.exports.gerarParcelas = gerarParcelas;
module.exports.validaSituacao = validaSituacao;
module.exports.validaSituacaoItens = validaSituacaoItens;
module.exports.insereRepresentante = insereRepresentante;
module.exports.insereTransportadora = insereTransportadora;
module.exports.insereCliente = insereCliente;
module.exports.confirma = confirma;
module.exports.classificarPor = classificarPor;



function Test1()
{
    Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.ClickTab("Prod&utos");
    Aliases.SIDI.frmPrincipal.MDIClient.TelaPedidos.PageControl.tsitems_pedido.PanelPedido.NUMERO_CLIENTE_PROD.Click(19, 12);
}