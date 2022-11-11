
export default async function GetTime(req: Request) {
  return new Response(JSON.stringify({
    timestamp: new Date()
  }))
}
