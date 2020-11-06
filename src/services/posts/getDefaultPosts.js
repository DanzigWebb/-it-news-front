import getPosts from '@/services/posts/getPosts'

export default async () => getPosts({
  page: 1,
  subject: ['']
})
