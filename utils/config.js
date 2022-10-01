require("dotenv").config();

const PPORT = process.env.PPORT || 3003;
const MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : process.env.TEST_MONGODB_URI;
const PW_SECRET = process.env.PW_SECRET;
const EMAIL_SECRET = process.env.EMAIL_SECRET;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

module.exports = {
  MONGODB_URI,
  PPORT,
  PW_SECRET,
  EMAIL_SECRET,
  SENDGRID_API_KEY,
};
