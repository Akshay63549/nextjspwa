// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// pages/api/hello.js

export default function handler(req, res) {
    // Enable CORS for all origins
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ message: 'Hello' });
    } else {
        // Handle other HTTP methods
        res.status(405).end();
    }
}