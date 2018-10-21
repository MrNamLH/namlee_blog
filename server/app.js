const next = require('next');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { makeExecutableSchema } = require('graphql-tools');
// const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const graphqlHTTP = require('express-graphql');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

const API_HOST = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api' : 'https://api.githunt.com';

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.DB || 'mongodb://localhost:27017/namlee_blog', // mongodb://namlee:namlee123@ds157901.mlab.com:57901/namlee_blog_db
	{
		useNewUrlParser: true,
	}
);

mongoose.connection.on('connected', () => console.log('Connected to mongo'));
mongoose.connection.on('error', e => console.log(`Aw shoot mongo --> ${e}`));

const PostSchema = new mongoose.Schema({
	createdDate: String,
	title: String,
	author: String,
	content: String,
	tag: String,
});

mongoose.model('Post', PostSchema);

const typeDefs = require('./schema');
const resolvers = require('./resolver');

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const extensions = ({ document, variables, operationName, result, context }) => ({
	runTime: Date.now() - context.startTime,
});

app.prepare()
	.then(() => {
		const server = express();
		server.use(cors('*'));

		server.get('/p/:id', (req, res) => {
			const actualPage = '/post';
			const queryParams = { id: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});

		server.use(
			'/api',
			graphqlHTTP({
				schema,
				graphiql: false,
			})
		);

		server.use(
			'/graphql',
			graphqlHTTP({
				schema,
				// context: { startTime: Date.now() },
				graphiql: true,
				// extensions,
				// pretty: true,
			})
		);

		server.get('*', (req, res) => handle(req, res));

		server.listen(PORT, err => {
			if (err) throw err;
			console.log(`> API ready on http://localhost:${PORT}/api`);
			console.log(`> GraphQL ready on http://localhost:${PORT}/graphql`);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
