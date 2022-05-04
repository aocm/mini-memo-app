import express from 'express'
const router = express.Router()

const memoList = [
  {
    date: '2016-05-03',
    name: 'Tom',
    title: 'title1',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    title: 'title2',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    title: 'title3',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    title: 'title4',
  },
]

router.get('/list', (req, res, next) => {
  res.json({result: memoList} )
})


export default router
