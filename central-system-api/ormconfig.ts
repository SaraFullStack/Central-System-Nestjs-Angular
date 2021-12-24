const HOST = process.env['DATABASE_HOST'];
const USER = process.env['POSTGRES_USER'];
const PASSWORD = process.env['POSTGRES_PASSWORD'];
const DATABASE = process.env['POSTGRES_DB'];

module.exports = {
  host: HOST,
  type: 'postgres',
  port: '5432',
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  entities: ["dist/**/**.entity{.ts,.js}"],
  synchronize: true,
};
