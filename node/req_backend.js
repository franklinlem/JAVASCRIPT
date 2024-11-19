    const http = require('http');
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        port: 80,
        path: '/posts/1',
        method: 'GET',
    };
    http.request(options, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        }).on('end', () => {
            console.log(data);
        });
    }).on('error', e => {
        console.error(e.message);
    }).end();