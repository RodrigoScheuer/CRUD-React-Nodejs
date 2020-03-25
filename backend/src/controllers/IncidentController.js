const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const data = request.body;
        data.ong_id = request.headers.authorization;

        const result = await connection('incidents').insert(data);

        return response.json({ id: result[0] });
    },

    async list(request, response) {
        const { page = 1 } = request.query;

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5) // pular registros
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        const [count] = await connection('incidents').count();
        response.header('X-Total-Count', count['count(*)']);

        response.json(incidents);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id)
            return response.status(401).json({ error: 'Operation not permitted.' });

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}