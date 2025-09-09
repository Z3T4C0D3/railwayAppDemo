const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/get-token', async (req, res) => {
  try {
    const { instanceUrl } = req.body;
    
    const response = await fetch(`${instanceUrl}/services/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'client_id=3MVG9Nwk_WnDTVp0yDeSWSIMW.iP0nMWyrrZdNkuBUAjGwPqL9rKe9HyAbsEUNQBqfhp9u6q7PGYWzJh8zRtY&client_secret=61B3DF6B34D36EC5DF9D8EF4FD2779F4450D983E4E354369A58C893314EEB1AF&grant_type=client_credentials'
    });

    const result = await response.json();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
