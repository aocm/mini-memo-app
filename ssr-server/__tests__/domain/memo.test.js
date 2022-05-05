const Memo = require('../../src/domain/Memo').default

describe('メモthrow確認', () => {
  it('引数が不足', async () => {
    expect(()=>{new Memo()}).toThrow('引数が不足')
  })
  it('titleが不足', async () => {
    const props = {
      title: null,
      name: 'test'
    }
    expect(()=>{new Memo(props)}).toThrow('titleが不足')
  })
  it('titleが文字列じゃない', async () => {
    const props = {
      title: 1,
      name: 'test'
    }
    expect(()=>{new Memo(props)}).toThrow('titleが文字列じゃない')
  })
  it('nameが不足', async () => {
    const props = {
      title: 'test',
      name: null
    }
    expect(()=>{new Memo(props)}).toThrow('nameが不足')
  })
  it('nameが文字列じゃない', async () => {
    const props = {
      title: 'test',
      name: 1
    }
    expect(()=>{new Memo(props)}).toThrow('nameが文字列じゃない')
  })
})