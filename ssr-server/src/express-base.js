
import express from 'express'
import session from 'express-session'
import memoController from './api/controller/memoController'
import { logger } from './log/logger'

export function createExpressApp() {
  const sess = {
    secret: 'secretkey',
    cookie: {
      httpOnly: true,
      maxAge: 60000 // 簡易的に1分としている
    },
    resave: false,
    saveUninitialized: true,
  }
  // if (isProd) sess.cookie.secure = true // httpsにするならtrueにする
  const app = express()
  app.use(session(sess))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  //. 全てのapiリクエストに対して前処理
  app.use('/api/*', function(req, res, next){
    logger.debug(req.originalUrl)
    next() // 個別処理へ
  })
  app.use('/api/memo', memoController)

  return app
}