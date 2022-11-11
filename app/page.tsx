import { DefaultAsyncFetch } from "../components/DefaultAsyncFetch";

export default async function Home() {
  return (
    <div>
      <h2>Fetching Patterns</h2>
      <DefaultAsyncFetch />
    </div>
  )
}
