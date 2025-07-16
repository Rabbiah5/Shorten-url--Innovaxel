const express = require('express');
const app = express();
const urlRoutes = require('./routes/urlRoutes');
const db = require('./db');
const PORT = 3000;

app.use(express.json());
app.use('/shorten', urlRoutes);

// Sync Sequelize models with DB
db.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error syncing DB:', err);
});