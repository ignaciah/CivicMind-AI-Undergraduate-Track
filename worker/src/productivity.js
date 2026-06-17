export default async function productivity(req) {
  const { tasks, time, energy } = await req.json();

  const scored = tasks.map(t => ({
    task: t,
    score: (energy === "low" ? t.length < 25 : t.length > 25) ? 2 : 1
  }));

  scored.sort((a, b) => b.score - a.score);

  return Response.json({
    plan: scored.map(s => s.task),
    explanation: "Prioritized using a simple heuristic based on energy and task complexity."
  });
}
