import express from 'express';
const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Gostack' });
});
app.listen(333, () => {
  console.log('😜 server started on port 333!');
});
