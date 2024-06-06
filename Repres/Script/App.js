﻿var Validacoes = require("Validacoes");

function AbreRepres()
{
  TestedApps.REPRES.Run();   
  Delay(2000);
    
  if(!Validacoes.CheckExists(Aliases.REPRES.TMessageForm_Atualizacao, 200)){  
    Log.Warning("Informação não foi encontrada", "", 200, null, Sys.Desktop);
    }else {     
     Aliases.REPRES.TMessageForm_Atualizacao.btnOK.Click();
    }
  Log.Checkpoint("Abriu o REPRES", "", 200, null, Sys.Desktop); 
  
}

function trocaBancos()
{
  TestedApps.TrocaBancos.Run();
  Delay(2000);
}
module.exports.AbreRepres = AbreRepres;
module.exports.trocaBancos = trocaBancos;