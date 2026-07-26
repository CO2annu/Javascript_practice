import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8000;

const users = [
  { id: 1, name: 'Alice', password: 'pass123' },
  { id: 2, name: 'Bob', password: 'abc456' },
  { id: 3, name: 'Charlie', password: 'xyz789' }
];

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ error: 'Name and password are required' });
  }
  const nextId = users.length ? Math.max(...users.map((item) => item.id)) + 1 : 1;
  const newUser = { id: nextId, name, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name, password } = req.body;
  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) user.name = name;
  if (password) user.password = password;

  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const [deletedUser] = users.splice(index, 1);
  res.json({ message: 'User deleted', user: deletedUser });
});

app.listen(PORT, () => {
  console.log(`Express backend running at http://localhost:${PORT}`);
});