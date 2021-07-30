# Before starting application, it is necessary to create .env file and install all needed packages <br />
# for successfully running and working.

Execute following command: `npm install`

## Environment Variable

Create a .env file at the root of the app and use <KEY>=<VALUE> pattern to add values for some<br />
variables specified below:

SECRET=ps120fadrn58d9aw
APP_PORT=3200
APP_HOST=localhost

Copy following lines in package.json file in scripts like this: 

"start": "tsc && node dist/index.js",
"dev": "nodemon src/index.ts",
"build": "tsc -p ."

Finally execute command `npm run dev` or `docker-compose up` to run application.