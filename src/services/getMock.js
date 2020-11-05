import { Config } from '@/config/config'
import { Post } from '@/services/models/Post'

export default async function (data) {
  const url = `${Config.host}posts`
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
  })
  const body = await res.text()
  const toJSON = JSON.parse(body)
  return toJSON.posts.map(post => new Post(post))
}
