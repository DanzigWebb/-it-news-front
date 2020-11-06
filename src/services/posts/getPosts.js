import { Config } from '@/config/config'
import { PostsResponse } from '@/services/models/Post'
import { Loader } from '@/components/ui/loader/LoaderState'

export default async function (data) {
  Loader.show()

  const url = `${Config.host}posts`
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
  })

  const toJSON = await res.json()
  Loader.hide()
  return new PostsResponse(toJSON)
}
