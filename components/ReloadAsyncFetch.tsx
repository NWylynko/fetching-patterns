
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=reload', { cache: "reload" })
  return response.json()
}

export const ReloadAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Reload Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "reload" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>Unknown</span>
    </div>
  )
}