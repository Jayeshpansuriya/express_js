import express from 'express';
// import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';  // ✅ Required

const app = express();

// ✅ Fix for __dirname (ESM me)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  const homepage = path.join(__dirname,  'index.html');
  res.sendFile(homepage);
});

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
