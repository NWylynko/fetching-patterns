
const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time', { cache: "default" })
  const result = await response.text()
  // return response.json()
  return { result }
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
      <span>Running in a RSC async function, this fetches at build time and never again.</span>
    </div>
  )
}