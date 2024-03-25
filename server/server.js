import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Active Server');
});

app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});