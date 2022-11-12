'use client';

import { use } from "react"

const fetchTime = async () => {
  const response = await fetch('https://fetching-patterns.vercel.app/api/time?type=use-fetch')
  const result = await response.json()
  return result
}

const UseFetch = () => {

  // const time = use(fetchTime())

  return (
    <main>
      <h3>Use Fetch</h3>
      <code>Code: {`
        fetch('...');
        const time = use(fetchTime());
      `}</code>
      {/* <pre>Response: {JSON.stringify(time, null, 2)}</pre> */}
      <span>This works {'"'}fine{'"'} on client navigation, send 3 requests to the api, but no more (atleast without any state or effects), But on page load it just fires off non-stop.</span>
    </main>
  )
}

export default UseFetch