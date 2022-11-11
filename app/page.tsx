import { DefaultAsyncFetch } from "../components/DefaultAsyncFetch";
import { ForceCacheAsyncFetch } from "../components/ForceCacheAsyncFetch";
import { NoCacheAsyncFetch } from "../components/NoCacheAsyncFetch";
import { NoStoreAsyncFetch } from "../components/NoStoreAsyncFetch";
import { OnlyIfCachedAsyncFetch } from "../components/OnlyIfCachedAsyncFetch";
import { ReloadAsyncFetch } from "../components/ReloadAsyncFetch";

export default async function Home() {
  return (
    <div>
      <h2>Fetching Patterns</h2>
      <DefaultAsyncFetch />
      {/* <ForceCacheAsyncFetch /> */}
      {/* <NoCacheAsyncFetch /> */}
      {/* <NoStoreAsyncFetch /> */}
      {/* <OnlyIfCachedAsyncFetch /> */}
      {/* <ReloadAsyncFetch /> */}
    </div>
  )
}

// type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";