const express = require('express');
const app = express();
const authRouter = require('./routes/api/auth');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));


app.use(express.json());
app.use('/api/auth', authRouter);


// Add your routes and middleware here

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
