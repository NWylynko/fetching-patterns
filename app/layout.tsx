import Link from "next/link"
import "./globals.css"
import styles from "./layout.module.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Fetching Patterns</title>
      </head>
      <body>
        <Link href="/" className={styles.home}><h2 className={styles.home}>Fetching Patterns</h2></Link>
        <nav className={styles.nav}>
          <Link href="/async-fetch-default" className={styles.link}>Async fetch default</Link>
          <Link href="/async-fetch-force-cache" className={styles.link}>Async fetch Force Cache</Link>
          <Link href="/async-fetch-no-cache" className={styles.link}>Async fetch No Cache</Link>
          <Link href="/async-fetch-no-store" className={styles.link}>Async fetch No Store</Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
