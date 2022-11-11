
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time', { cache: "force-cache" })
  return response.json()
}

export const ForceCacheAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Force-Cache Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "force-cache" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>Unknown</span>
    </div>
  )
}