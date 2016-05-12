---
layout: docs_page
id: Installation and Usage
parent: Catalog

permalink: catalog/installation/

title: Installation and Usage
introduction: Documentation for installing your own instance
---

The steps below will walk you through setting up your own instance of the oam-catalog. Code can be found on [GitHub](https://github.com/hotosm/oam-catalog).

## Installation and Usage

The steps below will walk you through setting up your own instance of the oam-catalog.

### Install Project Dependencies

- [MongoDB](https://www.mongodb.org/)
- [Node.js](https://nodejs.org/)

### Install Application Dependencies

    $ npm install

### Usage

#### Starting the database:

    $ mongod

The database is responsible for storing metadata about the imagery and analytics.

#### Starting the API:

    $ node index.js

The API exposes endpoints used to access information form the system via a RESTful interface.

#### Starting the backgound worker:

    $ node worker.js

The worker process runs on a schedule and checks for new data, update database when it finds anything to add.

### Environment Variables

- `OAM_DEBUG` - Debug mode `true` or `false` (default)
- `AWS_SECRET_KEY_ID` - AWS secret key id for reading OIN buckets
- `AWS_SECRET_ACCESS_KEY` - AWS secret access key for reading OIN buckets
- `DBURI` - MongoDB connection url
- `SECRET_TOKEN` - The token used for post requests to `/tms` endpoint