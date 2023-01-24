var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'fnrrfnvnksql42.mysql.database.azure.com',
	user:'nikrioetistrator@fnrrfnvnksql42', //Your Database User Name
	password:'InikswjeDog@1433', // Your Database Password
	database:'fnrbnerfrsql43'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;