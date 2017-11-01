export function generateGreeting(emulator = false) {
	return emulator
		? "Yup, I'm fake!!"
		: 'Hello, this is serverless!';
}