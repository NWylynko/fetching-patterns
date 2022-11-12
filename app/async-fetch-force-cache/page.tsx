
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=force-cache', { cache: "force-cache" })
  return response.json()
}

const ForceCacheAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Force-Cache Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "force-cache" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>In Development this will run on every page load, keeping as up to date as possible. In Production / build this will run only once at build time, it will never fetch again.</span>
    </div>
  )
}

export default ForceCacheAsyncFetch