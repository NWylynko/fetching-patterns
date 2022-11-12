
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=revalidate', { next: { revalidate: 10 } })
  return response.json()
}

const RevalidationAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <main>
      <h3>Revalidation Async Fetch</h3>
      <code>Code: {`
        fetch('...', { next: { revalidate: 10 } })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <h4>In Production:</h4>
      <ul>
        <li>Runs once at build time, on request if build time {'<'} current time - revalidate then it re-fetches.</li>
      </ul>
      <h4>In Development:</h4>
      <ul>
        <li>Runs on every page load, like no-store</li>
        <li>Once cached client-side, navigating doesnt re-fetch</li>
      </ul>
    </main>
  )
}

export default RevalidationAsyncFetch