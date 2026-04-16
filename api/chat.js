export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { history, userMsg, systemContext } = req.body;

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured in backend' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemContext },
          ...history,
          { role: 'user', content: userMsg }
        ],
      }),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || 'API error');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Chat API Error:', error.message);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
