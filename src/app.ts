import express from 'express';
import bodyParser from 'body-parser';
import loggerMiddleware from './middleware/loggerMiddleware';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import notesRoutes from './routes/notesRoutes';
import dbConnection from './db/config'


// MongoDB Connection
dbConnection;

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
export const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


export default app;
