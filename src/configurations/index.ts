export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db_port: parseInt(process.env.DB_PORT, 10) || 5432,
  db_name: process.env.DB_NAME || 'lesson',
  db_user: process.env.DB_USER || 'lesson',
  db_password: process.env.DB_PASSWORD || 'lesson',
  db_host: process.env.DB_HOST || 'localhost',
});
