<h2>I heros</h2>
<p>Projeto desenvolvido com node js,react,mysql</p>
<p>para rodar o projeto</p>
<div><span>git clone https://github.com/Reginaldo1239/challenges.git</span></div>
  <p>por padrao  o backend usa um serviço de banco de dados oferecido pela db4free.net,mas as vezes serviço fica offline,se acontecer recomendo importar o backend/iheros.sql para testar </p>
  <p>você vai precisar do mysql</p>
  <p> importar o arquivo iheros.sql , e anterar as variaveis  de acesso ao banco de dados no arquivo backend/.env </p>
  <h2>variaveis</h2>
    <p> HOST_DB=db4free.net</p>
    <p> DB_NAME=ihero123</p>
    <p>DB_USER_NAME=reginaldo123</p>
    <p>DB_USER_PASSWORD=123456789</p>

<p>front-end na pasta dev/front-end/iheros execute o comando npm install e apos instalar as depedencias , npm start</p>
<p>backend na pasta dev/backend npm install para instalar as depedencias e  node app.js <p>
<p>para executar os testes no backend vá para a pasta  dev/backend execute npm run test, para rodar os testes de integração é necessario que você já tenha executado node app.js e o backend tem que estar online  <p>
<h2>dados para logar no sistema</h2>
<p>nome:zrp</p>
<p>senha:123456</p>
<div>
 
<h4>dependecias front-end em React </h4>
<ul>
   <li>"@testing-library/jest-dom": "^4.2.4",</li>
  <li>  "@testing-library/react": "^9.3.2",</li>
 <li>  "@testing-library/user-event": "^7.1.2",</li>
   <li> "cross-fetch": "^3.0.5",</li>
   <li> "dotenv": "^8.2.0",</li>
   <li> "node-sass": "^4.14.1",</li>
 <li>   "react": "^16.13.1",</li>
 <li>   "react-dom": "^16.13.1",</li>
 <li>   "react-router-dom": "^5.2.0",</li>
 <li>   "react-scripts": "3.4.3"</li>
</div>
<div>
    <h4>dependencias backend NodeJs</h4>
    <ul>
    <li>"cors": "^2.8.5",</li>
  <li>"cross-fetch": "^3.0.5",</li>
   <li>"dotenv": "^8.2.0",</li>
   <li>"express": "^4.17.1",</li>
  <li>"faker": "^5.1.0",</li>
  <li>"jsonwebtoken": "^8.5.1",</li>
  <li>"mysql": "^2.18.1",</li>
  <li>socket.io": "^2.3.0"</li>
    </ul>
</div>

<div>
  <h2>selecionar heroi</h2>
  <p>como um dos requisitos no momento de selecionar o heroi é que tinha que ser  mais proximo, adicionei a opcao de enviar o endereço do heroi e no backend  troquei o endereço por latitude e longitude usando a api do google geocoding, e no momento de selecionar o heroi uso uma query para selecionar o heroi pela classe  e o mais proximo da localidade do mostro, para usar api do google é necessario uma key que vou deixar ativa temporariamente para facilitar a execucao do projeto. caso você queira usar uma chave propia basta atualizar a variavel KEY_GOOGLE no backend/.env </p>
    <h2>validações backend</h2>
      <span>As validações são feitas nos arquivos de middlewares dos valores que são enviados do front-end; </span>
    <p>no momento de cadastrar um novo heroi,nao fiz uma verificao se ja existia um nome do heroi cadastrado antes da insersao no banco de dados, porque considerei que poderia exister herois com o mesmo nome</p>
    <h2>socket</h2>
       <p>criei uma pasta socket-client para facilitar a localização de funçoes relacionas a socket e um models/socket-client.js para manipular o banco de dados</p>
        <h2>jwt</h2>
            <p>jwt deixei o token com validade infinita pois em ambiente de desenvolvimento é melhor para testar, mas pode ser colocado um periodo de validade </p>
</div>

  





   