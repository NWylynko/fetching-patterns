
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
      <span>This will call the fetch on every single request. (in both dev and prod) This can be dangerous if the api your calling has a limit.</span>
    </div>
  )
}

export default NoStoreAsyncFetch