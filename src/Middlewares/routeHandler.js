import { routes } from "../routes.js";
export const routeHandler = (request,response) => {
    const route = routes.find(route => {
      return route.method === request.method && route.path === request.url;
    });

    if(route){
      return route.controller(request,response);
    }

      return response.writeHead(400).end('erro:o servidor não pode processar a requisão.')
}