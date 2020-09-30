# Recuperaão de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instrucões de recuperacão de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Ultilizar Mailtrap para testar envios em ambiente de dev;
- Ultilizar Amazon SES para envios em producão;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

= O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualizacão de perfil

**RF**

- O usuário  deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já ultilizado;
- Para atualizar seu senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;


# Painel de prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificacão sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacões não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificacões do prestador devem ser armazenadas no MongoDb;
- As notificacões do prestador devem ser enviadas em tempo-real ultilizando Socket.io;

**RN**

- A notificão deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de servicos

**RF**

- O usuário deve poder listar todos os prestadores de servicos cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- - O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenado em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre as 8h as 18h (Primeiro as 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar servicos consigo mesmo;


