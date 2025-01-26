import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GeoLocations API",
      version: "1.0.0",
      description: "API for managing and retrieving geo-locations",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {
        Location: {
          type: "object",
          properties: {
            id: { type: "integer" },
            latitude: { type: "number" },
            longitude: { type: "number" },
            priorityScore: { type: "number" },
            stateId: { type: "number" },
            name: { type: "string" },
            address: { type: "string" },
            country: { type: "string" },
            siteType: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"], // Matches your route file for Swagger annotations
};

export const swaggerSpecs = swaggerJsdoc(swaggerOptions);
