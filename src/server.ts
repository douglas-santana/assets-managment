import { app } from "./app";
import { router } from "./routes";
import 'dotenv/config'
import { mongoConnection } from "./models/mongoConnection";

const PORT = process.env.PORT;

app.use(router);

mongoConnection;

app.listen(PORT);