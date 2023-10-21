const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Nugraha Saputra',
      version: '1.0.0',
      description: 'Deskripsi API Anda',
    },
    servers: [{ url: 'http://localhost:3000', description: 'Local development server' }],
  },
  apis: ['./index.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
