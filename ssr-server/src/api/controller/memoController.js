import express from 'express'
const router = express.Router()
import MemoServie from '../../domain/memoService';

const memoService = new MemoServie()

router.get('/list', (req, res, next) => {
  const memoList = memoService.getList()
  res.json({result: memoList} )
})
router.get('/view', (req, res, next) => {
  const memo = memoService.findById(req.query.id)
  res.json(memo)
})
router.post('/', (req, res, next) => {
  const isSuccess = memoService.saveMemo(req.body)
  if (isSuccess) {
    res.json({result: "success"} )
  }else{
    res.status(400)
    res.json({result: "error"} )
  }
})


export default router
