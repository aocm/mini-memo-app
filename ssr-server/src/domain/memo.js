import { uuid } from 'uuidv4'

export default class Memo {
  #id
  #date
  #name
  #title

  get dto() {
    return {
      id: this.#id,
      date: this.#date,
      name: this.#name,
      title: this.#title
    }
  }
  constructor(props) {
    if (!props) throw new Error('引数が不足')
    if (!props.title) throw new Error('titleが不足')
    if (typeof props.title !== 'string') throw new Error('titleが文字列じゃない')
    if (!props.name) throw new Error('nameが不足')
    if (typeof props.name !== 'string') throw new Error('nameが文字列じゃない')
    this.#title = props.title
    this.#name = props.name
    this.#date = props.date? props.date: new Date()
    this.#id = uuid()
  }

}