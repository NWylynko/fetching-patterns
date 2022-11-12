
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=no-store', { cache: "no-store" })
  return response.json()
}

const NoStoreAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <main>
      <h3>No Store Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "no-store" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <h4>In Both Prod and Dev:</h4>
      <ul>
        <li>This will call the fetch on every single page request.</li>
        <li>This wont fetch again if its already been fetched and your just navigation through links on the page.</li>
        <li>If the user clicks on the link before the client-side react hydration, it will act like a full page request, meaning it will do a re-fetch server-side.</li>
      </ul>
      <span>This can be dangerous if the api your calling has a limit.</span>
    </main>
  )
}

export default NoStoreAsyncFetch