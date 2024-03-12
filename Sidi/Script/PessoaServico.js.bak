var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");

var cadastroPessoasServicos = Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos.PagePessoasServicos.CadastroPessoasServicos

function cadastraCliente(){
  let contDados = 0; 
  while (contDados < Project.Variables.ContDados) {

  abreTela();  
  Principal.clicaNovo();  
  marcaFornecedor();
  marcaRepresentante();
  marcaTransportadora();
  marcaServicoTercerizado();  
  
  // Insere os dados
  
  insereCGC(Project.Variables.DadosPessoasServicos.CGC(contDados));
  
  insereUF(Project.Variables.DadosPessoasServicos.UF(contDados));
  
  insereInscricaoEstadual(Project.Variables.DadosPessoasServicos.inscricaoEstadual(contDados));
  
  insereRazaoSocial(Project.Variables.DadosPessoasServicos.nome(contDados));
  
  insereEndereco(Project.Variables.DadosPessoasServicos.rua(contDados), 
                  Project.Variables.DadosPessoasServicos.numero(contDados));
  
  insereBairro("Bairro");
  
  inserePais("Brasil");
  
  insereCidade(Project.Variables.DadosPessoasServicos.cidade(contDados));
  
  insereEmail(Project.Variables.DadosPessoasServicos.email1(contDados));
  
  // Avança para selecionar as informações de clientes 
  
  avancar();
  
  insereGrupoCliente("geral");
  
  marcaEAN13();
  
  confirma();
  
  Principal.clicaEditar();
  
  confirma();
  Principal.clicaEditar();
  confirma();
  
  Principal.fechaTela();
  
  contDados++;
  
  }
}

function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnPessoaseServicos,
   Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos, 
   "Pessoas e serviços");
}

function marcaFornecedor()
{
  cadastroPessoasServicos.gbServico_oferecido.FORNECEDOR.Click();
  cadastroPessoasServicos.gbServico_oferecido.FORNECEDOR.Click();
}

function marcaRepresentante()
{
  cadastroPessoasServicos.gbServico_oferecido.REPRESENTANTE.Click();
}

function marcaTransportadora()
{
  cadastroPessoasServicos.gbServico_oferecido.TRANSPORTADORA.Click();
}

function marcaServicoTercerizado()
{
  cadastroPessoasServicos.gbServico_oferecido.SERVICO_TERCEIRIZADO.Click();
  cadastroPessoasServicos.gbServico_oferecido.SERVICO_TERCEIRIZADO.Click();
}

function marcaCliente()
{
  cadastroPessoasServicos.gbServico_oferecido.cbCLIENTE.Click();
  cadastroPessoasServicos.gbServico_oferecido.cbCLIENTE.Click();
}
function insereCGC(cgc)
{
  cadastroPessoasServicos.CGC.Keys(cgc+"[Tab]");
}

function insereUF(uf)
{
  cadastroPessoasServicos.SIGLA_UF.Keys(uf+"[Tab]");
}

function insereRazaoSocial(nome)
{
    cadastroPessoasServicos.RAZAO_SOCIAL.Keys(nome + "[Tab]");
}

function insereEndereco(rua, numero)
{
  cadastroPessoasServicos.ENDERECO.Keys(rua + ", " + numero);
}

function insereBairro(bairro)
{ 
  cadastroPessoasServicos.BAIRRO.Keys(bairro);
}

function inserePais(pais)
{
  cadastroPessoasServicos.FK_PAIS.Keys(pais + "[Tab]");
}

function insereCidade(cidade)
{
  cadastroPessoasServicos.LookupCidade.Keys(cidade + "[Tab]");
}

function insereEmail(email)
{
  cadastroPessoasServicos.E_MAIL.Keys(email);
}
function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos.PanelPessoasServicos1.PanelBotoes.btnConfirma, "Pessoas e serviços");
  var mensagem = Aliases.SIDI.MensagemConfirmacao;
  if (Aliases.SIDI.MensagemConfirmacao.Exists){
    mensagem.btnSim.Click();
  }
}

function avancar()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos.PanelPessoasServicos1.PanelBotoes.btnAvancar.ClickButton();
}

function insereGrupoCliente()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos.PagePessoasServicos.tsCliente.PanelPessoasServicos2.gbCliente.GRUPO_CLIENTE.Keys("gera[Tab]");
}

function marcaEAN13()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos.PagePessoasServicos.tsCliente.PanelPessoasServicos2.gbCliente.USAR_PRODUTO_NF_REF.TGroupButton.ClickButton();
}

function insereInscricaoEstadual(insc)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmPessoasServicos.PagePessoasServicos.CadastroPessoasServicos.INSC_ESTADUAL.Keys(insc);
}
module.exports.cadastraCliente = cadastraCliente;
module.exports.confirma = confirma;
module.exports.abreTela = abreTela;
module.exports.insereCGC = insereCGC;
module.exports.insereBairro = insereBairro;
module.exports.avancar = avancar;
