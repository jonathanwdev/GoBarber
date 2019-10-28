<h1>API REST (GoBarber)</h1>
<h3>Uma api desenvolvida com o framework não opinativo(ExpressJS) com o objetivo de
gerenciar um barber shop.</h3>
<h3>Funcionalidades:<h3>
<h5>[Agendar horarios, Desmarcar Horarios], [Cadastrar e atualizar  usuarios], [Gerenciar prestadores de serviços e suas agendas por data e hora], [notificar os prestadores sobre novos agendamentos], [sessoes controladas atráves do JWT]</h5>
<h3>Bancos de dados</h3>
<h5>PostgreSQL(Funcionalidades comuns e com multiplos relacionamentos)</h5>
<h5>MongoDB(Trabalhar com as notificações e verificação de "leitura")</h5>
<h5>Redis(Trabalhar com filas(backgroundJobs) durante o envio de emails)</h5>

<h3>Dependencies :</h3>
<ul>

  <li>
    <b>Docker</b><br>
    Utilizado para criar o container com a imagem do PostgreSQL
    Utilizado para criar o container com a imagem do MongoDB
    Utilizado para criar o container com a imagem do Redis
  </li>

  <li>
    <b>BeeQueue</b><br>
    Utilizado para monitorar de filas background jobs
  </li>

  <li>
    <b>Express</b><br>
    Framework não opinativo
  </li>

  <li>
    <b>Nodemailer + Mailtrap </b><br>
    Utilizado para simular o envio de e-mail no ambiente de desenvolvimento
  </li>

  <li>
    <b>Sequelize / Sequelize-cli</b> <br>
    ORM utilizado fazer a abstração da base de dados
  </li>
  <li>
    <b>Nodemon</b> <br>
    ORM utilizado fazer a abstração da base de dados
  </li>

  <li>
    <b>Bcrypt</b><br>
    utilizado para criptografar dados
  </li>

  <li>
    <b>JWT</b><br>
    Json Web Token : Utilizado para criar a autenticação dos usuarios através de tokens
  </li>

  <li>
    <b>Yup</b><br>
    Utilizado para fazer a validação dos dados de entrada

  </li>

  <li>
    <b>Date-fns</b><br>
    Utilizado para fazer a validação datas
  </li>

  <li>
    <b>multer</b><br>
    utilizado para lidar com  multipart/form-data
  </li>

</ul>
<h3>Dev dependencies :</h3>
<ul>
  <li>
    <b>eslint</b><br>
  </li>
   <li>
    <b>eslint-config-airbnb-base</b><br>
  </li>
   <li>
    <b>eslint-config-prettier</b><br>
  </li>
   <li>
    <b>eslint-plugin-import</b><br>
  </li>
   <li>
    <b>sequelize-cli</b><br>
  </li>
   <li>
    <b>nodemon</b><br>
  </li>
   <li>
    <b>prettier</b><br>
  </li>
   <li>
    <b>sucrase</b><br>
  </li>
</ul>
