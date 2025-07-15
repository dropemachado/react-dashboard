const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// rota de exemplo
app.get('/api/data', (req, res) => {
  res.json([
    { id: 1, label: 'Item A', value: 42 },
    { id: 2, label: 'Item B', value: 73 },
    { id: 3, label: 'Item C', value: 18 }
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend rodando na porta ${PORT}`));
