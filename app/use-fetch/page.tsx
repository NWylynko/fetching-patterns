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
        fetch('...')
        const time = use(fetchTime())
      `}</code>
      {/* <pre>Response: {JSON.stringify(time, null, 2)}</pre> */}
    </main>
  )
}

export default UseFetch