var Validacoes = require("Validacoes");

function AbreSidi()
{
  TestedApps.SIDI.Run();  
  
  Delay(5000);
  
  if( Validacoes.CheckExists(Aliases.SIDI.Aviso, 500))
  {
    Log.Warning("Avizo", "", 500, null, Sys.Desktop);
    Aliases.SIDI.Aviso.btnOK.ClickButton();  
    
  }
  
  if( Validacoes.CheckExists(Aliases.SIDI.AvisoAtencao, 500))
  {
    Log.Warning("Avizo", "", 500, null, Sys.Desktop);
    Aliases.SIDI.Aviso.btnOK.ClickButton();  
  }
  Log.Checkpoint("Abriu o SIDI", "", 500, null, Sys.Desktop); 
}

function trocaBancos()
{
  TestedApps.TrocaBancos.Run();
  Delay(5000);
}
module.exports.AbreSidi = AbreSidi;
module.exports.trocaBancos = trocaBancos;