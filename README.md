# Sistema de Login com Node.js e MongoDB

Um sistema de autenticação completo desenvolvido com Node.js, Express, MongoDB e EJS, com interface moderna e responsiva.

## 👥 Integrantes do Projeto

- **Danilo Augusto Martins Frazon**
- **João Vitor Furquim de Brito**
- **Pedro Henrique Silva Melo**

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, Express.js
- **Banco de Dados:** MongoDB com Mongoose
- **Template Engine:** EJS
- **Autenticação:** bcrypt para hash de senhas
- **Sessões:** express-session
- **Frontend:** HTML5, CSS3, JavaScript
- **Estilização:** CSS moderno com design responsivo

## 📋 Funcionalidades

- ✅ Sistema de login seguro com hash de senhas
- ✅ Sessões de usuário persistentes
- ✅ Área protegida acessível apenas após login
- ✅ Interface moderna e responsiva
- ✅ Logout seguro com destruição de sessão
- ✅ Validação de formulários
- ✅ Design limpo e profissional

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (local ou MongoDB Atlas)
- npm ou yarn

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd sistema-login
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   MONGO_URI=mongodb://localhost:27017/projeto02
   ```

4. **Inicie o MongoDB:**
   
   Certifique-se de que o MongoDB está rodando em sua máquina local ou configure a conexão com MongoDB Atlas.

5. **Crie o usuário administrador:**
   ```bash
   node createAdmin.js
   ```

6. **Inicie o servidor:**
   ```bash
   node server.js
   ```

7. **Acesse a aplicação:**
   
   Abra seu navegador e vá para: `http://localhost:3000/login`

## 📁 Estrutura do Projeto

```
sistema-login/
├── controllers/
│   └── authController.js    # Controladores de autenticação
├── models/
│   └── user.js             # Modelo do usuário (Mongoose)
├── routes/
│   └── authRoutes.js       # Rotas de autenticação
├── views/
│   ├── login.ejs           # Página de login
│   └── protected.ejs       # Área protegida
├── public/
│   └── style.css           # Estilos CSS
├── .env                    # Variáveis de ambiente
├── server.js               # Arquivo principal do servidor
├── createAdmin.js          # Script para criar usuário admin
└── README.md               # Documentação do projeto
```

## 🔐 Credenciais Padrão

Para testar a aplicação, use as seguintes credenciais:

- **Usuário:** `admin`
- **Senha:** `123456`

## 🎨 Design e Interface

O sistema possui uma interface moderna com:

- **Paleta de cores:** Tons de azul suaves e profissionais
- **Tipografia:** Segoe UI para melhor legibilidade
- **Layout responsivo:** Funciona em desktop e mobile
- **Animações suaves:** Transições e efeitos hover
- **Feedback visual:** Estados de foco e hover nos elementos

## 🔧 Funcionalidades Técnicas

### Autenticação
- Hash de senhas com bcrypt (salt rounds: 10)
- Validação de credenciais no backend
- Proteção contra ataques de força bruta

### Sessões
- Gerenciamento de sessões com express-session
- Middleware de autenticação para rotas protegidas
- Logout seguro com destruição completa da sessão

### Segurança
- Validação de entrada nos formulários
- Sanitização de dados
- Proteção contra injeção de código

## 📱 Responsividade

O sistema é totalmente responsivo e funciona perfeitamente em:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (até 767px)

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Configure as variáveis de ambiente** no seu provedor de hospedagem
2. **Instale as dependências** no servidor
3. **Configure o MongoDB** (local ou Atlas)
4. **Inicie a aplicação** com `node server.js`

### Provedores recomendados:
- Heroku
- Vercel
- Railway
- DigitalOcean

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request



⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**

