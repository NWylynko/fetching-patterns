
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=only-if-cached', { cache: "only-if-cached", credentials: "same-origin" })
  return response.json()
}

export const OnlyIfCachedAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Only If Cached Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "only-if-cached", credentials: "same-origin" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>Unknown</span>
    </div>
  )
}