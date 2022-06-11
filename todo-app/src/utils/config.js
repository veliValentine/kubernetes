const {
  PORT = 3000,
  IMAGE_FOLDER_PATH = null,
  DB_POSTGRES_URL = 'postgres://postgres:password@localhost:5432'
} = process.env

export default {
  PORT,
  IMAGE_FOLDER_PATH,
  DB_URL: DB_POSTGRES_URL
}