export default async function environment(req) {
  const { location, concern } = await req.json();

  const data = await fetch(`${DATA_URL}/environment.json`).then(r => r.json());
  const entry = data[concern];

  return Response.json({
    risk: entry.risk,
    recommendation: entry.recommendation,
    explanation: `Based on synthetic ${concern} data for ${location}.`
  });
}
