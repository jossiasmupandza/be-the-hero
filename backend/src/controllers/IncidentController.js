const connection = require("../database/connection");

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs','ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( (page - 1) * 5 )
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },

    async create(req, res) {
        const {title, descripition, value} = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            descripition,
            value, 
            ong_id,
        });

        return res.json({id});
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const ong_id = req.headers.authorization;

            const incident = await connection("incidents")
              .where("id", id)
              .select("*")
              .first();

            if(!incident) {
                return res.status(404).json({msg: 'Incident not found'});
            }
            
            if (incident.ong_id !== ong_id) {
              return res.status(401).json({ msg: 'Operation not authorized' });
            }

            await connection("incidents")
              .where("id", id)
              .delete();

            return res.status(204).send();
        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Server error: " + error.message);
        }
        
        
    }
};