import { Config } from '@/config/config'
import { PostsResponse } from '@/services/models/Post'
import { Loader } from '@/components/ui/loader/LoaderState'
import { ajax } from 'rxjs/ajax'
import { map, tap } from 'rxjs/operators'

export default function (data) {
  Loader.show()

  return getPostsByRx(data).pipe(
      tap(_ => Loader.hide()),
      map(({response}) => new PostsResponse(response))
  )
}

function getPostsByRx(data) {
  const url = `${Config.host}posts`
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8'
  }

  return ajax.post(url, data, headers)
}
