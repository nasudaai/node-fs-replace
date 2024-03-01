import express from 'express';
const app = express();
const port = 3004;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('hello')
})


app.listen(port, () => {
  console.log(`app listening http://localhost:${port}`)
})
