var Validacoes = require("Validacoes");

function FechaRelatorio(modelo){ 
  if ( !Validacoes.CheckExists(Aliases.SIDI.Aviso)){
    
  var repeat = 0
  var tempo = 0;
  var tempoAbrirRelatorio = 0
  
  while (!Aliases.SIDI.ppPrintPreview.Exists){
    //Delay(1000);
    tempoAbrirRelatorio += 3;
  }
  
  Aliases.SIDI.ppPrintPreview.WaitWindow('TppTBXStatusBar');
  
  // Conta quanto segundos o relatorio demora para ser calculado
   while (repeat == 0){
     Aliases.SIDI.VisualizadorRelatorio.BarraSuperior.ControlesSuperiores.Click(19, 9);
     if (Validacoes.CheckExists(Aliases.SIDI.ppPrintDialog.pnlBottom.btnCancel)) {
    Aliases.SIDI.ppPrintDialog.pnlBottom.btnCancel.ClickButton()
    repeat = 1
  } else {
    Delay(1000);
    tempo += 1; 
  }
}
  
  
  
// while ((aqString.Find(Aliases.SIDI.VisualizadorRelatorio.TppTBXStatusBar, 'Calculando') != -1) || 
//         (aqString.Find(Aliases.SIDI.VisualizadorRelatorio.TppTBXStatusBar, 'Calculating') != -1)||
//         (aqString.Find(Aliases.SIDI.VisualizadorRelatorio.TppTBXStatusBar, 'Desenhando') != -1) || 
//         (aqString.Find(Aliases.SIDI.VisualizadorRelatorio.TppTBXStatusBar, 'Drawing') != -1) ||
//         (aqString.Find(Aliases.SIDI.VisualizadorRelatorio.TppTBXStatusBar, 'Accessing') != -1)||
//         (aqString.Find(Aliases.SIDI.VisualizadorRelatorio.TppTBXStatusBar, 'Acessando') != -1))
//  {
//     Delay(1000);
//     tempo += 1;     
//  }
  
//  Delay(1000);
  
  // Fecha o relatorio
  Aliases.SIDI.VisualizadorRelatorio.BarraSuperior.ControlesSuperiores.Click(493, 10);
  
  // Exibe no log o tempo que levou para abrir o relatório
  Log.Checkpoint("O relatorio " + modelo + " Levou " + tempoAbrirRelatorio + " segundos para abrir.");
  
  // Exibe no log o tempo de geramento do relatório
  Log.Checkpoint("O relatorio " + modelo + " Levou " + tempo + " segundos para ser gerado.");
  } 
  else
  {
    
    Log.Warning("O relatorio " + modelo + " não abriu corretamente",'', 400, null, Sys.Desktop); 
    
    // Fecha mensagem de erro
    Aliases.SIDI.Aviso.btnOK.ClickButton(); 
    
    // Verifica se o ReportBuider abriu e se sim fecha o mesmo
    if (Validacoes.CheckExists(Aliases.SIDI.VisualizadorRelatorio.BarraSuperior.ControlesSuperiores, 500))
    {
      // Fecha o relatorio
      Aliases.SIDI.VisualizadorRelatorio.BarraSuperior.ControlesSuperiores.Click(457, 12);
    }
    
  }
}
module.exports.FechaRelatorio = FechaRelatorio;