export default async function awaitWithLoading(callback) {
  this.isLoading = true
  let response
  try {
    response = await callback
  } catch (e) {
    response = e
  }
  this.isLoading = false
  return response
}
