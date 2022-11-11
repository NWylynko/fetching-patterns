import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
