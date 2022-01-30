import express from 'express';

const app = express();

const port = 3000;

app.use('/public', express.static('./src/'))

app.get('/', (req, res) => {
	res.sendFile('./src/views/index.html', { root: '.' })
});

app.listen(port, () => {
	console.log(`App is litening on port ${port}`);
});