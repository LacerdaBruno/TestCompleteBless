var Data = require("Data");
var Relatorios = require("Relatorios");
var Validacoes = require("Validacoes");
var App = require("App");
var Principal = require("Principal");
var Visualizacoes = require("Visualizacoes");


function insereSetores()
{
  abreTela();
  Principal.clicaNovo();
  insereDescricao(Project.Variables.Setores.nome(0));
  insereSigla(Project.Variables.Setores.sigla(0));
  insereSeqFabricar(Project.Variables.Setores.sequeciaFabricar(0));
  insereSeqBaixar(1);
  confirma();
 
  for(i = 1; i < Project.Variables.Setores.RowCount; i++){
    Principal.clicaNovo(); 
    insereDescricao(Project.Variables.Setores.nome(i));
    insereSigla(Project.Variables.Setores.sigla(i));
    insereSetorPreRequisito(Project.Variables.Setores.nome(i-1));
    insereSeqFabricar(Project.Variables.Setores.sequeciaFabricar(i));
    insereSeqBaixar(i+1);
    
    switch (Project.Variables.Setores.nome(i)){
      case "CORTE":
        Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.GroupBox2.SAI_MATERIAIS_NO_RESUMO.ClickButton(cbChecked);
        break; 
      case "EXPEDICAO":
        marcaUltimoSetor();
        Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.GroupBox2.SAI_EM_FICHA_ITENS_PEDIDO.ClickButton(cbChecked);
        break;
      case "PESPONTO":
        marcaBanca();
        break; 
      case "MONTAGEM":
        Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.BAIXAR_NUM_NUM.ClickButton(cbChecked);
        break;
    }
    confirma();
    Principal.clicaEditar();
    confirma();
    Principal.clicaEditar();
    cancela();
  }  
  Principal.fechaTela();
}

function abreTela()
{
  Principal.abreTelas(Aliases.SIDI.frmPrincipal.btnSetores,
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut,
  "Setores"
  );
}

function insereDescricao(descricao)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.DESCRICAO.Keys(descricao);
}

function insereSigla(sigla)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.SIGLA.Keys(sigla);
}

function insereSetorPreRequisito(setor)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.SETOR_PRE_REQUISITO.Keys(setor+"[Enter]");
}

function marcaUltimoSetor()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.ULTIMO_SETOR.ClickButton(cbChecked);
}

function marcaBanca()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.BANCA_PESPONTO.TGroupButton.ClickButton();
}

function insereSeqFabricar(seq)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.gbSequencia.SEQ_FABRIL.Keys(seq);
}

function insereSeqBaixar(seq)
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.PageControlSetor.tsSetor.gbSequencia.SEQ_BAIXAR.Keys(seq);
}


function confirma()
{
  Principal.confirma(Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.Panel1.PanelBotoes.btnConfirma, "Setores");
  Principal.verificaConfirmado(Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.Panel1.PanelBotoes.btnConfirma, "Setores");
}
module.exports.insereSetores = insereSetores;

module.exports.abreTela = abreTela;

function cancela()
{
  Aliases.SIDI.frmPrincipal.MDIClient.frmSetorManut.Panel1.PanelBotoes.btnCancela.ClickButton();
}