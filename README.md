# Before starting application, it is necessary to create .env file and install all needed packages <br />
# for successfully running and working.

Execute following command: `npm install`

## Environment Variable

Create a .env file at the root of the app and use <KEY>=<VALUE> pattern to add values for some<br />
variables specified below:

SECRET=ps120fadrn58d9aw
APP_PORT=3200
APP_HOST=localhost
DB_URI=mongodb://db:27017/shopping-list

Copy following lines in package.json file in scripts like this: 

"start": "node dist/index.js",
"dev": "nodemon src/index.ts",
"build": "tsc"

First create user on api 'http://localhost:3200/register' => with POST method and data in format {
    "email": "",
    "password": ""
}

Then register to get token on api 'http://localhost:3200/login' with POST method and same data.

With token named 'jwt' in header you can access to protected routes.

You must create product name on route 'http://localhost:3200/product' with POST method and data in format {
    "name": ""
}

To create shopping list you must set jwt token in header and call method POST on api 'http://localhost:3200/shopping-list' and data in format {
    "name": "",
    "productList": [{
        "productId": "",
        "amount": ,
        "productName": ""
    },{
        "productId": "",
        "amount": ,
        "productName": ""
    },{
        "productId": "",
        "amount": ,
        "productName": ""
    }]
}

Name is required and unique. In productList, productId is existing product in Product document.

To view statistic you must call GET method of api 'http://localhost:3200/shopping-list/statistic' and send data in format {
    "dateFrom": "",
    "dateTo": ""
}

Finally execute command `npm run dev` or `docker-compose up` to run application.