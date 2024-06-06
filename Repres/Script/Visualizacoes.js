var Relatorios = require("Relatorios");
/*
* recebe botão do relatorio o nome e visualiza
*/
function visualizarBotaoModelo(botao, modelo){
  Log.Message("Visualizando reltatório :" + modelo)
  botao.ClickButton();  
  botao.PopupMenu.Click(modelo);
  
  Relatorios.FechaRelatorio(modelo);
}

function visualizarModelo(botao, modelo)
{
  botao.ClickButton();  
  
  Relatorios.FechaRelatorio(modelo);
}
module.exports.visualizarBotaoModelo = visualizarBotaoModelo;

module.exports.visualizarModelo = visualizarModelo;