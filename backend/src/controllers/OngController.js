const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const data = request.body;
        data.id = generateUniqueId();

        await connection('ongs').insert(data);

        return response.json({ id: data.id });
    },

    async list(request, response) {
        const ongs = await connection('ongs').select('*');

        response.json(ongs);
    },

    async listIncidents(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

        response.json(incidents);
    }
}