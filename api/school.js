const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(process.cwd(), 'schools.json');

module.exports = async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const schoolId = req.query.id;
    if (!schoolId) {
        return res.status(400).json({ error: 'ID d\'école manquant' });
    }

    try {
        const schools = JSON.parse(fs.readFileSync(schoolsPath, 'utf-8'));
        const school = schools.find(s => s.id === schoolId);
        if (!school) {
            return res.status(404).json({ error: 'École non trouvée' });
        }
        return res.status(200).json(school);
    } catch (e) {
        return res.status(500).json({ error: 'Erreur lors de la récupération de l\'école', details: e.message });
    }
};
