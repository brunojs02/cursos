const crypto = require("crypto");
const connection = require("../database/connection");

const findAll = async (_, response) => {
  try {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  } catch (error) {
    return response.json({ error });
  }
};

const create = async (request, response) => {
  const { uf, name, city, email, whatsapp } = request.body;
  const id = crypto.randomBytes(4).toString("HEX");
  try {
    const ong = { id, uf, name, city, email, whatsapp };
    await connection("ongs").insert(ong);
    return response.json({ id });
  } catch (error) {
    return response.json({ error });
  }
};

module.exports = { create, findAll };
