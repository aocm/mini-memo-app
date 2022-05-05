class MemoStore {
  #list = [
    {
      id: '1',
      date: '2016-05-03',
      name: 'Tom',
      title: 'title1',
    },
    {
      id: '2',
      date: '2016-05-02',
      name: 'Tom',
      title: 'title2',
    },
    {
      id: '3',
      date: '2016-05-04',
      name: 'Tom',
      title: 'title3',
    },
    {
      id: '4',
      date: '2016-05-01',
      name: 'Tom',
      title: 'title4',
    }
  ]

  constructor () {
  }
  push (params) {
    this.#list.push(params)
  }
  remove (id){
    this.#list = this.#list.filter(item => item.id!==id)
  }
  get list (){
    return this.#list
  }
}
const memoStore = new MemoStore()
export default memoStore