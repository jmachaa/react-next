const express = require('express');
const app = express();
const routes = require('./routes');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});