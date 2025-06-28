export default async function handler(req, res) {
  const { moment, frustration, envFactor, win } = req.body;
  const result = `Based on what you shared:
- You were proud when: ${moment}
- Your main frustration is: ${frustration}
- The environment contributes because: ${envFactor}
- Your small win goal is: ${win}

Here's a starting insight: Focus on recreating that proud moment with the same energy, while reducing the environmental triggers of frustration. Start by achieving your small win this week.`;
  res.status(200).json({ result });
}
