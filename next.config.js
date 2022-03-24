require('reflect-metadata');

const nextEnv = require('next-env');

if (process.env.USE_DOT_ENV) {
	// eslint-disable-next-line no-console
	console.log('% % % % % % % % % % USING .env FILE % % % % % % % % % %', process.env.USE_DOT_ENV);
	require('dotenv').config({ path: './.env.local' });
}

const withNextEnv = nextEnv();

/** @type {import('next').NextConfig} */
module.exports = withNextEnv({
	reactStrictMode: true,
});
