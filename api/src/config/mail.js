export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'Equipe GOBarber <noreply@gobarber.com>',
  },
};
