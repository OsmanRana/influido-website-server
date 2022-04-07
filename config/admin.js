module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e282965f1b63edf3c23e703b40fbd350'),
  },
});
