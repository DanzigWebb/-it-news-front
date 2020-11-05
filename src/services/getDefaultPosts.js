import { Config } from '@/config/config'
import { PostsResponse } from '@/services/models/Post'

export default async () => {
  const url = `${Config.host}posts`
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      page: 1,
      subject: ['']
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
  })

  const toJSON = await res.json()
  return new PostsResponse(toJSON)
}
