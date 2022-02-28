import { Router } from "express";
import { WikipediaController } from "../controllers/WikipediaController";

const routes = Router();

routes.get('/api/v1/wikipedia', new WikipediaController().getWikipediaBySearchQuery);

export { routes };