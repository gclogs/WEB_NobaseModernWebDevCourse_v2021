import express from 'express';
import AdminBro from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import mongoDB from './config/mongoose';

const app = express()
const db = new mongoDB();
const adminBro = new AdminBro({
  databases: []
})

const router = AdminBroExpress.buildRouter(adminBro)

db.conn();

app.use(adminBro.options.rootPath, router)
app.use(express.urlencoded());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    success: true
  })
})


app.listen(4000, () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: 4000 🛡️
    ################################################
  `)
})
.on("error", (err) => {
  console.error(err);
  process.exit(1);
})
