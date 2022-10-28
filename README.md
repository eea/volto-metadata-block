# volto-metadata-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-metadata-block)](https://github.com/eea/volto-metadata-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-metadata-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-metadata-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-metadata-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-metadata-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-metadata-block-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-metadata-block-develop)



[Volto](https://github.com/plone/volto#volto) add-on: Metadata Block that enables Document metadata insertion within the Blocks area.

### Metadata block

![Demo](https://github.com/eea/volto-metadata-block/raw/docs/docs/volto-metadata-block.gif)

### Metadata section block

![Demo](https://github.com/eea/volto-metadata-block/raw/docs/docs/volto-metadata-section-block.gif)

## Getting started

1. Create new volto project if you don't already have one:

   ```
   $ npm install -g yo @plone/generator-volto
   $ yo @plone/volto my-volto-project --addon @eeacms/volto-metadata-block

   $ cd my-volto-project
   $ yarn add -W @eeacms/volto-metadata-block
   ```

1. If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-metadata-block"
   ],

   "dependencies": {
       "@eeacms/volto-metadata-block": "*"
   }
   ```

1. Install new add-ons and restart Volto:

   ```
   $ yarn
   $ yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-metadata-block/blob/master/RELEASE.md)


## How to contribute

See [DEVELOP.md]https://github.com/eea/volto-metadata-block/blob/master/DEVELOP.md).

## See also

- [volto-slate-metadata-mentions](https://github.com/eea/volto-slate-metadata-mentions)

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-metadata-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
