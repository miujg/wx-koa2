import * as Router from 'koa-router'
import {getUser} from './action/user'

const router = new Router()

router.post('/login', async (ctx, next) => {

  ctx.body = {name: 'jgmiu'}
})

router.post('/user', async (ctx, next) => {
  ctx.body = {name: 'xxx'}
})

router.get('/user', async (ctx, next) => {
  console.log('----->')
  let uses = await getUser()
  ctx.body = {user: uses}
})

export {
  router
}