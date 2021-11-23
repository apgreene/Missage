import express, {Application} from 'express';
import cors from 'cors';
import router from './router';
import db from './models/index.model';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

const port = process.env.PORT || 3001;
const app: Application = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(router);

(async function () {
  try {
    db;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 🚀`);
    });
  } catch (error) {
    console.error(error);
  }
})();
