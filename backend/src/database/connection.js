const knex = require('knex');
const configuration = require('../../knexfile');

const ambiente = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

module.exports = knex(ambiente);