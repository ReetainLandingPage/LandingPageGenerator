module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // On accepte juste les logs et on répond OK
    console.log('[CLIENT LOG]', req.body);
    return res.status(200).json({ status: 'ok' });
};
