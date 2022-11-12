import Link from "next/link"
import "./globals.css"
import styles from "./layout.module.css"
import { AnalyticsWrapper } from './components/analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Fetching Patterns</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Link href="/" className={styles.home}><h2 className={styles.home}>Next 13 Fetching Patterns</h2></Link>
        <nav className={styles.nav}>
          <Link href="/async-fetch-force-cache" className={styles.link}>Async fetch Force Cache</Link>
          <Link href="/async-fetch-no-store" className={styles.link}>Async fetch No Store</Link>
          <Link href="/async-fetch-revalidation" className={styles.link}>Async fetch Revalidation</Link>
          {/* <Link href="/use-fetch" className={styles.link}>Use Fetch</Link> */}
        </nav>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
