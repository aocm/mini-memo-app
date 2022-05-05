import { logger } from '../log/logger'
import Memo from './memo'
import memoStore from '../infra/memoRepository'

export default class MemoService {
  /**
   * memoをストアに保存する
   * @param {*} input
   * @returns
   */
  saveMemo = (input) => {
    try {
      const memo = new Memo(input)
      memoStore.push(memo.dto)
      return true
    } catch (e) {
      logger.warn(e)
      return false
    }
  }

  /**
   * 一覧すべて取得する
   * @returns
   */
  getList = () => {
    logger.info(memoStore.list)
    return memoStore.list
  }

  findById = (id) => {
    const result = memoStore.list.find(e=> e.id===id)
    if (result){
      return {
        result,
        empty: false
      }
    } else {
      return {empty: true}
    }
  }
}
