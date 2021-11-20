const express = require('express');
const app = express();
const puerto = 3030;

const { makeExecutableSchema } = require('graphql-tools');

const graphqlHTTP = require('express-graphql').graphqlHTTP;

const { tipos } = require('./graphQL/saludo.esquema');
const { solucionador } = require('./graphQL/saludo.solucionador');

const esquemaSaludo = makeExecutableSchema(
    {
        typeDefs: tipos,
        resolvers: solucionador
    }
);

app.use('/graphql', graphqlHTTP(
    {
        schema: esquemaSaludo,
        graphiql: true
    }
));

app.use(express.json());
app.listen(puerto, () => {
    console.log(`Servicio de BD División Política escuchando en http://localhost:${puerto}`);
})