export function analyzeEnvironment(location, concern, dataset) {
  const entry = dataset[concern];

  return {
    risk: entry.risk,
    recommendation: entry.recommendation,
    explanation: Based on synthetic ${concern} data for ${location}.
  };
}
