
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time', { cache: "default" })
  return response.json()
}

export const DefaultAsyncFetch = async () => {
  const time = await fetchTime();

  return (
    <div>
      <h3>Default Async Fetch</h3>
      <code>Code: {`
        fetch('...', { cache: "default" })
      `}</code>
      <pre>Response: {JSON.stringify(time, null, 2)}</pre>
      <span>Running in a RSC async function, this runs on every page refresh.</span>
    </div>
  )
}