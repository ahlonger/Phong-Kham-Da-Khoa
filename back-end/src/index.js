const express = require('express')
const { PrismaClient } = require('./generated/client')
const app = express()
const prisma = new PrismaClient()
const cors = require('cors');
// liên kết fe và be
app.use(cors());
//   Xử lý JSON data
app.use(express.json());
//   Xử lý x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }))


// user đăng ký
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
 res.send('Hello World')
});

app.use("/public", express.static("public")); 

app.use('/uploads', express.static('public/uploads'));

app.listen(3000, () => {
 console.log('Server is running on port 3000')
});
