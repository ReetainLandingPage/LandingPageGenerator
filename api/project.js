const { supabaseRequest } = require('../lib/supabase');

module.exports = async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const projectName = req.query.name;
    if (!projectName) {
        return res.status(400).json({ error: 'Nom du projet manquant' });
    }

    try {
        const result = await supabaseRequest('GET', `/Projects?project_name=eq.${encodeURIComponent(projectName)}&limit=1`);
        if (!result || result.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }
        return res.status(200).json(result[0]);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
