# INTERACTIVE SERVERLESS BOILERPLATE

### DEV Scripts:
- `npm run emulate` run serverless locally (with hot reload - localhost:3000)
- `npm run offline` run `serverless offline` (official serverless offline emulator)

### Bundle scripts:
- `npm run bundle`
- `npm run deploy`

### Jenkins:
- `cd serverless` move to serverless folder
- `npm install` install packages for `serverless`
- `cd ..` back to root folder, which can use npm script of the repo
- `npm run deploy` bundle serverless and deploy

### Chrome inspection
- `npm run emulate` actually allows us "inspect" our node.js application in Chrome Devtool - there
will be an green icon of Node.js in Chrome Debugger panel for us to inspect (of course, with hot code injection).