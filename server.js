const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb/dbConnect');
const agentRouter = require('./routes/agentRoutes');
const enrolleeRouter = require('./routes/enrolleeRoutes');
const qrcodeRouter = require('./routes/qrcodeRoutes');
const statsRouter = require('./routes/statsRoutes');
const qrcodeStatsRouter = require('./routes/qrcodeStatsRoutes');
const path = require('path');


dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
// app.use('/image', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'))
app.use((req, res, next) => {
    console.log(req.path + " " + req.method);
    next();
})

// routes
app.use('/api/agent', agentRouter);
app.use('/api/enrollee', enrolleeRouter);
app.use('/api/qrcode', qrcodeRouter);
app.use('/api/access', statsRouter);
app.use('/api/qrcode-stats', qrcodeStatsRouter);


// database connection && starting the server
const startServer = async () => {
    try {
        const port = process.env.PORT || 3001;

        connectDB(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

        app.listen(port, () =>{
            console.log("Server started on port: " + port);
        })
        
    } catch (error) {
        console.log(error)
    }

}
startServer();