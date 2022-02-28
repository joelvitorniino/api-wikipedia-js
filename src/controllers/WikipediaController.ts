import { Request, Response } from "express";
import axios from 'axios';
import { IWikipedia } from "../interfaces/IWikipedia";
import { clearHTML } from "../utils/clearHTML";

export class WikipediaController {
    async getWikipediaBySearchQuery(request: Request, response: Response) {
        const { search_query } = request.query;
        
        const responseWikipedia = await axios.get<IWikipedia>(`https://pt.wikipedia.org/api/rest_v1/page/summary/${search_query}`);
        const wikipediaWithoutHTML = clearHTML(responseWikipedia.data.extract_html);

        response.status(200).json({ result: wikipediaWithoutHTML });
    };
};