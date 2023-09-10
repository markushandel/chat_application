const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

console.log("PRINT ALL ENDPOINTS");

// Print all endpoints
function printEndpoints(layer, prefix = '') {
    if (layer.route) {
        const routePath = `${prefix}${layer.route.path}`;
        const methods = Object.keys(layer.route.methods).join(', ');
        console.log(`Endpoint: ${routePath}`);
        console.log(`Methods: ${methods}`);
    } else if (layer.name === 'router' && layer.handle.stack) {
        const routerPath = `${prefix}${layer.path}`;
        layer.handle.stack.forEach((nestedLayer) => {
            printEndpoints(nestedLayer, routerPath);
        });
    }
}

app._router.stack.forEach((layer) => {
    printEndpoints(layer);
});


module.exports = app;
