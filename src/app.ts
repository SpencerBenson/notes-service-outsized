import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import loggerMiddleware from './middleware/loggerMiddleware';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import notesRoutes from './routes/notesRoutes';

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/outsized_notes_service_db', {} as mongoose.ConnectOptions);

const app = express();

// Middlewares
app.use(loggerMiddleware);
app.use(bodyParser.json());

// Routes
app.use('/', notesRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
