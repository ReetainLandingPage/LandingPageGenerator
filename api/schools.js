const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(process.cwd(), 'schools.json');

module.exports = async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const schools = JSON.parse(fs.readFileSync(schoolsPath, 'utf-8'));
        return res.status(200).json(schools);
    } catch (e) {
        return res.status(500).json({ error: 'Impossible de lire schools.json', details: e.message });
    }
};
