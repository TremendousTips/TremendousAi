export default async function handler(req, res) {
  const { input } = req.body;

  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`
    },
    body: JSON.stringify({
      prompt: input,
      max_tokens: 50
    })
  });

  const data = await response.json();
  res.status(200).json({ text: data.choices[0].text });
}
