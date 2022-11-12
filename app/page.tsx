export default async function Home() {
  return (
    <>
      <h4>Click on one of the links above to find out how they work.</h4>
      <a href="https://github.com/nwylynko/fetching-patterns" style={{ color: "black", display: "block", marginBottom: 8 }}>Github Repo</a>
      <span>Versions</span>
      <ul>
        <li>Next 13.0.3</li>
        <li>React 18.2.0</li>
      </ul>
      <span>Next Config</span>
      <pre>{JSON.stringify({
          experimental: {
            appDir: true,
          }
        }, null, 2)}</pre>
      <span>Made out of interest by <a href="https://nick.wylynko.com">Nick Wylynko</a></span>
    </>
  )
}
