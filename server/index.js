const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const config = require("./config/config")

app.use(cors());
const port = config.PORT;
mongoose.connect(config.MONGO_URI);

// user routes
const user_routes = require("./routes/userRoute")

app.use('/api', user_routes);

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
