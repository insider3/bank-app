const express = require('express');

const app = express();
const PORT = 3000; 


const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];


app.use(express.json());


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // User authentication
  const user = users.find((user) => user.username === username);

  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }


  if (user.password === password) {
    res.sendFile(__dirname + '/public/account-summary.html');
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/public/blog.html');
});

app.get('/news', (req, res) => {
  res.sendFile(__dirname + '/public/news.html');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


