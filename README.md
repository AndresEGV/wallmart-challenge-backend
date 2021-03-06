<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AndresEGV/bsale-desafio-backend">
    <img src="https://cdn.potatopro.com/sites/default/files/styles/company_logo_/public/2021-03/walmart-1200x589.jpg?itok=hpNVZTGk" alt="Logo" width="80" height="80"/>
  </a>

  <h3 align="center">Desafio Wallmart Backend </h3>

  <p align="center">
      Crear una interfaz para crear una nueva “nave interestelar”, con un
backend en nodejs que guarde la información en base de datos.
Para el modelo de datos usar la siguiente entidad (es válido descartar
algunos campos como ejem: pilots)
    <br />
    <a href="https://nimble-sable-cd7f53.netlify.app/"><strong>Ver Deploy</strong></a>
    <br />
    <br />  
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## Sobre el proyecto

Crear dos API en Node.js con sus respectivas interfaces.
Consumir información de API de prueba StarWars API (link) y de base de
datos.

<p align="right">(<a href="#top">back to top</a>)</p>

### BackEnd Construido con

- [Express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [mongo](https://www.mongodb.com/cloud/atlas/lp/try2-aterms?utm_content=rlsapostreg&utm_source=google&utm_campaign=gs_americas_rlsamultirest_search_brand_dsa_atlas_desktop_rlsa_postreg&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646452&adgroup=131761126212&gclid=CjwKCAjw7cGUBhA9EiwArBAvopOl3P5eBJq-lqVUvhrwxePPLWu-OWsjsCHM9SrZQJj6q8kWO0SunBoC3WsQAvD_BwE)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Empezando

Siga las intrucciones que vienen a continuación para poder probar el proyecto localmente.

### Instalación

1. Clonar el repositorio
   ```sh
   git clone https://github.com/AndresEGV/wallmart-challenge-backend
   ```
2. Instalar dependecias NPM
   ```sh
   npm install
   ```
3. Abrir terminal en el proyecto y ejecutar el siguiente comando

   ```js
   node index.js o utilizar nodemon
   ```
4. Crear variable de entorno llamada variables.env y poner lo siguiente:

   ```js
   FRONTEND_URL= http://localhost:3000
   DB_URL= mongodb+srv://root:root@cluster0.qvtyi.mongodb.net/starwars

   ```

### Consideraciones

La base de datos esta en Mongo DB Atlas, por lo que no es necesario instalar nada, ya esta en internet y funcionando

El diagrama de arquitectura se encuentra en la carpeta llamada public/img

<p align="right">(<a href="#top">back to top</a>)</p>

## Endpoints

Esta es una API de consumo. Solo se utilizó el método HTTP GET.

1. [api/interstellar-ships]() Permite crear una nueva nave retornado la respuesta correspondiente

```json
{
  "msg": "ship created successfully "
}
```

2. [/api-doc]() Permite ver la documentación de la API creada en swagger

<p align="right">(<a href="#top">back to top</a>)</p>
