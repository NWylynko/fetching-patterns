
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=no-store', { cache: "no-store" })
  return response.json()
}

const NoStoreAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>No Store Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "no-store" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>This will call the fetch on every single page request. (in both dev and prod) This can be dangerous if the api your calling has a limit. This wont fetch again if its already been fetched and your just navigation through links on the page.</span>
    </div>
  )
}

export default NoStoreAsyncFetch