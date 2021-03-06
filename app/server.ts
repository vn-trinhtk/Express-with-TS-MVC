/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';

// Import WelcomeController from controllers entry point
import { IndexController } from './controllers';

// Create a new express application instance
const app: express.Application = express();

// Set view engine for this application
app.set('view engine', 'pug');

// The port the express app will listen on
const port: number = 3000;
// Mount the WelcomeController at the /welcome route
app.use('/', IndexController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
