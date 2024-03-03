import { Elysia } from 'elysia'
import { registerRestaurant } from './routes/register-restaurant'
import { sendAuthLink } from './routes/send-auth-link'
import chalk from 'chalk'

const app = new Elysia().use(registerRestaurant).use(sendAuthLink)

app.listen(Number(process.env.PORT), () => {
  console.log(
    chalk.greenBright(`HTTP server running on port ${process.env.PORT}`),
  )
})
