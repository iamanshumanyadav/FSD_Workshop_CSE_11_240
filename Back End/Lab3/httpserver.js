import http from 'http';

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/msg' && method === 'GET') {
        res.write('This is the /msg GET route');
        res.end();
        return;
    }

    res.write('Hello World');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});