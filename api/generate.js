export default async function handler(req, res){

  const { topic } = req.body;

  // simple AI placeholder (replace later)
  const article = `
  <h1>${topic}</h1>
  <p>This is a sample article about ${topic}.</p>
  <p>More content here...</p>
  `;

  res.json({ article });
}
