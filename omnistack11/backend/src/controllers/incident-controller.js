const connection = require("../database/connection");

const findAll = async (_, response) => {
  try {
    const data = await connection("incidents").select("*");
    return response.json(data);
  } catch (error) {
    return response.json({ error });
  }
};

const create = async (request, response) => {
  const { body, headers } = request;
  const { authorization: ongId } = headers;
  const { title, value, description } = body;
  try {
    const [incidentId] = await connection("incidents").insert({
      title,
      value,
      description,
      ong_id: ongId
    });
    return response.json({ id: incidentId });
  } catch (error) {
    return response.json({ error });
  }
};

const deleteIncident = async (request, response) => {
  const { params, headers } = request;
  const { id } = params;
  const { authorization: ongId } = headers;
  try {
    const incident = await connection("incidents")
      .where("id", id)
      .select()
      .first();

    if (incident.ong_id !== ongId) {
      const error = { status: 401, message: "Permissão negada!" };
      throw error;
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return response.status(204).send();
  } catch (error) {
    const { status = 400 } = error || {};
    return response.status(status).json({ error });
  }
};

module.exports = { create, findAll, deleteIncident };
