
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=revalidate', { next: { revalidate: 10 } })
  return response.json()
}

const RevalidationAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Revalidation Async Fetch</h3>
      <code>Code: {`
        fetch('...', { next: { revalidate: 10 } })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>In development this re-fetches on every page load, no respecting the revalidation time, essentially doing no-store. In Production this works the same way as force-cache, calling first at build-time (the api needs to be available during build) and then on request it checks how long ago it was fetched, if its more than the revalidation time (in seconds) it re-fetches and returns the response the user.</span>
    </div>
  )
}

export default RevalidationAsyncFetch