import getPosts from '@/services/posts/getPosts'

export default () => getPosts({
  page: 1,
  subject: ['']
})
