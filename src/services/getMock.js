import { Config } from '@/config/config'

class Post {
  constructor(postData) {
    this.title = postData.title;
    this.link = postData.link;
    this.img = postData.img;
    this.description = postData.description;
  }
}

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
