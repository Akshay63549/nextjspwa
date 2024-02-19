// pages/api/user/[id].js

export default function handler(req, res) {
        // Enable CORS for all origins
        res.setHeader('Access-Control-Allow-Origin', '*');
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            // Handle GET request
            res.status(200).json({ id, message: `User ${id}` });
            break;
        case 'POST':
            // Handle POST request
            // Example: Create a new user with the provided ID
            res.status(200).json({ id, message: `New user created with ID ${id}` });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
