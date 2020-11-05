export class Post {
  constructor(postData) {
    this.title = postData.title
    this.link = postData.link
    this.img = postData.img
    this.description = postData.description
  }
}

export class PostsResponse {
  constructor(response) {
    const {allPosts, posts} = response
    this.quantity = allPosts
    this.posts = PostsResponse.parsePosts(posts) || []
  }

  static parsePosts(posts) {
    return posts?.map(post => new Post(post))
  }
}
