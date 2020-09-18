# volto-metadata-block
[![Releases](https://img.shields.io/github/v/release/eea/volto-metadata-block?cache=1)](https://github.com/eea/volto-metadata-block/releases)

[Volto](https://github.com/plone/volto#volto) add-on: Metadata Block that enables Document metadata insertion within the Blocks area.

![Demo](https://github.com/eea/volto-metadata-block/raw/docs/docs/volto-metadata-block.gif)

## Getting started

1. Create new volto project if you don't already have one:
    ```
    $ npm install -g @plone/create-volto-app
    $ create-volto-app my-volto-project
    $ cd my-volto-project
    ```

1. Update `package.json`:
    ``` JSON
    "addons": [
        "@eeacms/volto-widgets-view",
        "@eeacms/volto-metadata-block"
    ],

    "dependencies": {
        "@plone/volto": "8.0.0",
        "@eeacms/volto-widgets-view": "1.0.0",
        "@eeacms/volto-metadata-block": "1.0.0"
    }
    ```

1. Install new add-ons and restart Volto:
    ```
    $ yarn
    $ yarn start
    ```

1. Go to http://localhost:3000

1. Happy editing!

## How to contribute

See [DEVELOP.md](DEVELOP.md).

## See also

* [volto-slate-metadata-mentions](https://github.com/eea/volto-slate-metadata-mentions)

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
