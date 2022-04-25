import { app } from "./app";
import { router } from "./routes";
import 'dotenv/config'
import { mongoConnection } from "./models/mongoConnection";

const PORT = process.env.PORT || 3001;

app.use(router);

mongoConnection;

router.get('/', (request, response) => {
  return response.json({
    message: 'Welcome to Asset Management API. Acess: https://github.com/douglas-santana/assets-managment for know how to use!'
  })
});

app.listen(PORT);