
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=force-cache', { cache: "force-cache" })
  return response.json()
}

const ForceCacheAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <main>
      <h3>Force-Cache Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "force-cache" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <h4>In Production:</h4>
      <ul>
        <li>Runs once at build time, on page request it returns this result</li>
        <li>Runs once during request time, pre-fetches this when a link to it is on the page, and returns this result if they click on the link to navigate to it.</li>
      </ul>
      <h4>In Development:</h4>
      <ul>
        <li>Runs on every page load, like no-store</li>
        <li>Once cached client-side, navigating doesnt re-fetch</li>
      </ul>
    </main>
  )
}

export default ForceCacheAsyncFetch