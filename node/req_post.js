const http = require('http');
const postData = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userID: 1,
});
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Content-type': Buffer.byteLength(postData),
    },
};
const req = http.request(options, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    }).on('end', () => {
        console.log(data);
    });
}).on('error', e => {
    console.error(e.message);
}).end();
req.write(postData);
req.end();