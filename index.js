const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3000;

// 使用 Helmet 中间件
app.use(helmet());

// 其他中间件和路由设置
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
