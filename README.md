# volto-metadata-block

Metadata block


## Develop

Before starting make sure your development environment is properly set. See [Volto Developer Documentation](https://docs.voltocms.com/getting-started/install/)

1. Install `mrs.developer`

        $ npm install -g mrs.developer

1. Install `@plone/create-volto-app`

        $ npm install -g @plone/create-volto-app

1. Create new volto app

        $ create-volto-app my-volto-project
        $ cd my-volto-project

1. Update `package.json` with the following information:

        {
            "name": "my-volto-project",
            "description": "My Volto project",

            "private": true,

            "scripts": {
                "develop": "missdev --config=jsconfig.json --output=addons"
            },

            "addons": [
                "volto-slate",
                "@eeacms/volto-metadata-block"
            ],

            "workspaces": [
                "src/addons/volto-metadata-block"
            ],

            "dependencies": {
                "@plone/volto": "github:eea/volto#7.7.0-beta.1"
            }
        }

1. Add the following to `mrs.developer.json`:

        {
            "volto-metadata-block": {
                "url": "https://github.com/eea/volto-metadata-block.git",
                "package": "@eeacms/volto-metadata-block",
                "branch": "develop",
                "path": "src"
            }
        }

1. Install

        $ yarn develop
        $ yarn

1. Start backend

        $ docker run -d --name plone -p 8080:8080 -e SITE=Plone -e VERSIONS="plone.restapi=7.0.0a4" -e ADDONS="kitconcept.volto" plone:5

    ...wait for backend to setup and start - `Ready to handle requests`:

        $ docker logs -f plone

    ...you can also check http://localhost:8080/Plone

1. Start frontend

        $ yarn start

1. Go to http://localhost:3000

1. Happy hacking!

        $ cd src/addons/volto-metadata-block/
