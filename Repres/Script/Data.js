function DataAtual()
{
  var dataAtual;
  
  dataAtual = aqConvert.DateTimeToFormatStr(aqDateTime.Today(),'%d%m%Y');
  
  Project.Variables.DataAtual = dataAtual;
}

function amanha(){
  return aqConvert.DateTimeToFormatStr(aqDateTime.AddDays(aqDateTime.Today(), 1),'%d%m%Y');
}

module.exports.DataAtual = DataAtual;
module.exports.amanha = amanha;