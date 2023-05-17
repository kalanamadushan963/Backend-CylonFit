const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
require('./models/Complaint');
require('./models/Enquiry');
require('./models/Category');
require('./models/ProductDetails');
require('./models/Faqcategory');
require('./models/FaqDetails');
//
const userRoutes = require('./routes/userRoutes');
const complaintRoutes = require('./routes/complaintRoutes')


const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(userRoutes);
app.use(complaintRoutes);

//

app.get('/',requireToken, (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})