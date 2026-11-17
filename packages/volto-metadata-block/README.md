# @eeacms/volto-metadata-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-metadata-block)](https://github.com/eea/volto-metadata-block/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-metadata-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-metadata-block/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block)

[Volto](https://github.com/plone/volto#volto) add-on: Metadata Block that enables Document metadata insertion within the Blocks area.
### Metadata block
![Demo](https://raw.githubusercontent.com/eea/volto-metadata-block/master/docs/volto-metadata-block.gif)
### Metadata section block
![Demo](https://raw.githubusercontent.com/eea/volto-metadata-block/master/docs/volto-metadata-section-block.gif)

## See also

* [volto-slate-metadata-mentions](https://github.com/eea/volto-slate-metadata-mentions)

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-metadata-block": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-metadata-block'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
