Caso tenha algum problema para conectar em sua instância do MySql, tente o seguinte comando, alterando apenas o 'YourRootPassword' pela senha que foi escolhida para o usuário:

### ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
