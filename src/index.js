import 'dotenv/config'

import express from 'express'
import usersRoutes from './routes/users.js'
import productsRoutes from './routes/product.js'
import adminRoutes from './routes/admin.js'
import logMiddleware from './middleware/log.js'

const app = express();
const PORT = process.env.PORT || 5000

//app.method(path, handler) --> basic routing methods

app.use(express.json());

app.use(logMiddleware)

app.use('/users', usersRoutes)
app.use('/product', productsRoutes)
app.use('/admin', adminRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
//40:00