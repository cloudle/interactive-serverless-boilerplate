import { generateGreeting } from './utils';

export function handler(event, context, callback) {
	return callback(null, createResponse(200, { message: generateGreeting() }));
}

export function createResponse(statusCode, body) {
	return {
		statusCode,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',
		},
		body: JSON.stringify(body),
	};
}
