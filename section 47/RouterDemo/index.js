const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
// app.use('/dogs/:id', dogRoutes); You can also use this to include the id in the route
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
});