# Ethnoby App (beta) ![example branch parameter](https://github.com/ethnoby/ethnoby.github.io/actions/workflows/cd.yml/badge.svg?branch=master)

A web-app catalog of traditional Belarusian songs with texts, mapping of origins and instant text search. It is a subproject of [Ethnoby.org](https://ethnoby.org) - a knowledge base and multimedia library on Belarusian ethnography.

## Tech stack
Vue/Nuxt under the hood, Vuetify for UI, Typesense for index, Algolia modules for search UI, Firebase for authentication, Leaflet for mapping, Soundcloud for storing audio (available when logged in). Build and hosted on GitHub Pages. Data is taken from [Ethnoby.org](https://ethnoby.org) database, is managed in Citrix Podio and gets to Typsense index via Podio API (this part is in another repo).

See it live at https://app.ethnoby.org

## Development
Master branch is being deployed automatically. Add changes via pull requests from feature branches.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work ask other contributors

## Roadmap
Main plans are:
- add sections for some other folklore items (dances, tunes and tales)
- add functionality for favorites and user generated playlists
- add interface translations to other languages (Ukranian, Polish, Lithuanian etc.) to be able to extend project to the whole region
- convert the whole knowlegde base (albums, books, personalities etc.) into this web-app format with public instant search through all sections
- ...
- profit! ;) 
Ok, not the real profit, but at least make it more sustainable and pay for services like multimedia storage not from our own pockets. 
