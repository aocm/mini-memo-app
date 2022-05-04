// expressとvue両方のpassを含めます。そのためjsで書いてます。
export const DEFAULT_TITLE = 'Apps'

export const metas = {
  // Vue
  '/': {
    title: 'top',
    description: 'top'
  },
  '/about': {
    title: 'about',
    description: 'about'
  },
  '/memo': {
    title: 'メモ一覧',
    description: 'メモ一覧'
  },
  '/memo/new': {
    title: 'メモ作成',
    description: 'メモ作成'
  },

  // exprss
}

export const getMeta = (path)=>{
  if (path === '') path = '/'

  let htmlTitle = DEFAULT_TITLE
  let htmlDescription = ''
  try {
    htmlTitle = metas[path].title
    htmlDescription = metas[path].description
  } catch {
    htmlTitle = DEFAULT_TITLE
    htmlDescription = ''
  }
  return {htmlTitle, htmlDescription}
}