
const fetchTime = async () => {
  const response = await fetch(`https://fetching-patterns.vercel.app/api/time`)
  return response.json()
}

export const DefaultAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Default Async Fetch</h3>
      <pre>{JSON.stringify(time, null, 2)}</pre>
    </div>
  )
}