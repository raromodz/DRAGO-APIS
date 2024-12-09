/*
Venom na voz, essa base de site foi feito totalmente por mim
base totalmente grátis para aprender fazer seu próprio sote de apis
qualquer venda nessa source entre em contato comigo pelo WhatsApp ou telegram

Se for postar ou usar deixe apenas os créditos 

youtube.com/@venommodsss
youtube.com/@venomkuromi
wa.me/559784388524
*/
const express = require('express');
const path = require('path');
__path = process.cwd()
const app = express();
const PORT = 8080;

// Importando as rotas da API
const apiRoutes = require('./apis');

// Servir arquivos estáticos da pasta "public"
app.use(express.static("estilo"))

// Usar as rotas da API
app.use(apiRoutes);

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__path, '/home/index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`\nCréditos: Venom Mods\nCanal: youtube.com/@venommodsss\nTelegram: t.me/VenomDsn\n\nServidor rodando em http://localhost:${PORT}`);
});
