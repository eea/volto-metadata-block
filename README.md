# volto-metadata-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-metadata-block)](https://github.com/eea/volto-metadata-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-metadata-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-metadata-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-metadata-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-metadata-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block&branch=develop)



[Volto](https://github.com/plone/volto#volto) add-on: Metadata Block that enables Document metadata insertion within the Blocks area.

### Metadata block

![Demo](https://raw.githubusercontent.com/eea/volto-metadata-block/master/docs/volto-metadata-block.gif)

### Metadata section block

![Demo](https://raw.githubusercontent.com/eea/volto-metadata-block/master/docs/volto-metadata-section-block.gif)

## See also

* [volto-slate-metadata-mentions](https://github.com/eea/volto-slate-metadata-mentions)

## Getting started

### Try volto-metadata-block with Docker

      git clone https://github.com/eea/volto-metadata-block.git
      cd volto-metadata-block
      make
      make start

Go to http://localhost:3000

### Add volto-metadata-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-metadata-block"
   ],

   "dependencies": {
       "@eeacms/volto-metadata-block": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-metadata-block
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-metadata-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-metadata-block/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-metadata-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
