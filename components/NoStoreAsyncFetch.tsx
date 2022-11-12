
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=no-store', { cache: "no-store" })
  return response.json()
}

export const NoStoreAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>No Store Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "no-store" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>Unknown</span>
    </div>
  )
}