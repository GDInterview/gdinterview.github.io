require('file-loader?name=[name].[ext]!./index.html');

import { questionsController } from "./components/questions/questions_controller";
import { resourcesController } from "./components/resources/resources_controller";

questionsController.initPageLoad();
resourcesController.initPageLoad();
