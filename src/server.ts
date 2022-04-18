import { app } from "./app";
import { router } from "./routes";
import 'dotenv/config'

const PORT = process.env.PORT || 3002;

app.use(router);

app.listen(PORT);