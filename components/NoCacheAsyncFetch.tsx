
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time', { cache: "no-cache" })
  return response.json()
}

export const NoCacheAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>No Cache Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "no-cache" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>Unknown</span>
    </div>
  )
}