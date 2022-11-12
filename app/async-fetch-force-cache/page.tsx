
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
        <li>If another page has a {'<Link>'} component to this page, by default next will pre-fetch this page. During that prefetch, only once since the server is built, it will make another fetch, and the result of that will be whats returned in the prefetch. This means that navigating to this page and going to it from the url can have two different results. (this may be a bug)</li>
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