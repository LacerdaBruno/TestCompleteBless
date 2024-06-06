

//Eu estava considerando conectar ao banco de dados e acessar os dados para utilizá-los nos casos de teste. No entanto, encontrei uma abordagem melhor. 
//No projeto "Sidi", criei variáveis de tabela (dbtable) que realizam a consulta desejada. 
//Estou mantendo esse código aqui porque ele funciona, e caso seja necessário, já está pronto para ser usado.


function recuperarCodigoMaterial()
 {
   var DSet, codigo;
   // Cria um novo objeto IAQAADODataset
   DSet = ADO.CreateADODataset();
   // Especifique a string de conexão
   DSet.ConnectionString ="DRIVER=Firebird/InterBase(r) driver; UID=SYSDBA; PWD=pmpsyfwr; DBNAME=10.1.1.101:C:\\bless\\Bin\\Data\\SIDI\\DADOS\\DADOS\\DADOS.FDB; DIALECT=3";
   // Especifique o tipo de comando e o texto
   DSet.CommandType = cmdTable;
   DSet.CommandText = "ITEM_ESTOQUE";
   // Abre o conjunto de dados
   DSet.Open();
   // Processa os registros da tabela de produtos
   Log.AppendFolder("ITEM_ESTOQUE")
   DSet.First();
   var i = 0
   while (! DSet.EOF)
 
   {
     if (Project.Variables.Materiais.RowCount < i){
            
       break;
     
       }    
   
     // Inserir dados no log de teste
     codigo = DSet.FieldByName("codigo_interno").Value;     
     Log.Message(codigo);
     DSet.Next();
     i++;     
     
   };
   DSet.Close();
 }

