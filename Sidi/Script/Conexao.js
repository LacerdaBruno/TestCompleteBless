function ADOExample()
 {   
// Cria uma instância do objeto de conexão com o banco de dados Firebird
var connection = ADO.CreateADOConnection();
// Define a string de conexão com o banco de dados Firebird
connection.ConnectionString = "DRIVER=Firebird/InterBase(r) driver; UID=SYSDBA; PWD=pmpsyfwr; DBNAME=SIDI";

// Suprime a caixa de diálogo de login
connection.LoginPrompt = false ;
// Abre a conexão com o banco de dados
connection.Open();

// Executa consultas ou outras operações no banco de dados

// Fecha a conexão com o banco de dados
connection.Close();

}