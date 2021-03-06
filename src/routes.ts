import { Router } from "express";
import { SettingsController } from "./controllers/settingsController";


const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas * 
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => {
 * 
 * }
 * 
 */

