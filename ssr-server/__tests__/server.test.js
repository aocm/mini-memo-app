const request = require('supertest')
const { createDevServer } = require('../server')

describe('memoデータ確認', () => {
  it('get /api/memo', async () => {
    const {app} = await createDevServer()
    const res = await request(app).get('/api/memo/list')
    const exprectData = {"result": [{"date": "2016-05-03", "id": "1", "name": "Tom", "title": "title1"}, {"date": "2016-05-02", "id": "2", "name": "Tom", "title": "title2"}, {"date": "2016-05-04", "id": "3", "name": "Tom", "title": "title3"}, {"date": "2016-05-01", "id": "4", "name": "Tom", "title": "title4"}]}
    expect(res.body).toEqual(exprectData)
  })

  it('post /api/memo', async () => {
    const {app} = await createDevServer()
    const res = await request(app)
      .post('/api/memo')
      .send({
        title: 'test',
        name: 'name',
      })
    expect(res.status).toBe(200)
    expect(res.body).toEqual({result:'success'})

    const res2 = await request(app).get('/api/memo/list')
    const exprectData = {"id": "1", "name": "name", "title": "test"}
    expect(res2.body.result[4].name).toEqual(exprectData.name)
    expect(res2.body.result[4].title).toEqual(exprectData.title)
    // uuidとdateのモックはTODO
  })

  it('post /api/memo エラーパターン', async () => {
    const {app} = await createDevServer()
    const res = await request(app)
      .post('/api/memo')
      .send({
        name: 'name',
      })
    expect(res.status).toBe(400)
    expect(res.body).toEqual({result:'error'})
  })
})