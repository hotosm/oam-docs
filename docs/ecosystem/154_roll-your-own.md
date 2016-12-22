---
layout: article
id: Roll your own OAM
parent: Ecosystem

permalink: ecosystem/roll-your-own/

title: Ecosystem
introduction: An overview of the OpenAerialMap components and how they connect with each other.
---

For development purposes, you can roll parts of OpenAerialMap locally. Detailed docs exist in the README section of each component. This document is an overview of the interdependencies and configuring the development environment as a functional whole.

## Development Requirements
- It will be necessary to use [nvm](https://github.com/creationix/nvm) during development - some applications will need Node v4, others will use Node v0.12

- In some components (the web frontends) configuration variables can be added to `app/assets/scripts/config/local.js`, and will override any other references to the config object throughout the project. For example, The Token Manager and Imagery Uploader must be configured to search for the Uploader API at the correct path, which is port 4000 by default. You would have use the point to a local API URL by adding the following to the configuration files in each of the apps:

  ```
  module.exports = {
    OAMUploaderApi: 'http://localhost:4000'
  };
  ```

- Server applications such as the Catalog API and Uploader API need to have environment variables set before starting them. Please refer to the list of environment variables are listed in the README docs in the code repositories.

- Certain components require the installation of third party libraries and applications (such as MongoDB). Refer to the list of dependencies in the READMEs.

- OpenAerialMap is a catalog of images stored on the Open Imagery Network. OIN is a specification and a set of imagery buckets provided under a free license. The OAM Catalog reads a file (the registry) to determine which buckets to index in order to form the catalog. The OAM Uploader pushes data to a specific registered bucket (the OpenAerialMap bucket). Since the Catalog and Uploader depend on the Open Imagery Network, you will have to replicate OIN locally. This means having an [Amazon S3](https://aws.amazon.com/s3/) bucket available for development, as well as creating a hosted register file for the Catalog API to read (see further details below).

## List of components

### The OAM uploader ecosystem

At a high-level, the OAM uploader software ecosystem consists of three GitHub repositories housing the [API](https://github.com/hotosm/oam-uploader-api), the [administrative panel](https://github.com/hotosm/oam-uploader-admin), and the front-end [uploader form](https://github.com/hotosm/oam-uploader).

**The Uploader API ([oam-uploader-api](https://github.com/hotosm/oam-uploader-api))**

The API provides the endpoints used by the upload submission form, including routes for authenticating the session via a database of approved tokens, adding image URLs and metadata to the processing queue database, checking the status of a user's uploads, and checking the status of specific uploads.

It also provides the API endpoints used for managing users through the administrative form, including adding, removing and editing tokens.

Finally, it manages a queue of images by checking for new submissions to the database at regular intervals, downloading them, processing them to a standardized TIFF specification, generating metadata and thumbnails, and uploading them to an Amazon S3 bucket. The token manager and imagery uploader require a connection to the API to function.

- When launching the API, several environment variables must be set. We suggest that you duplicate `local.sample.env` to `local.env` and fill in the data. Contact a maintainer for the full AWS credentials and database paths.

- You will need an Amazon S3 bucket to test uploads.

- To run, load the variables with `source local.env` and start the app with `npm start`.

**The Token Manager ([oam-uploader-admin](https://github.com/hotosm/oam-uploader))**

*This web application depends on the Uploader API*

The administrative panel uses the API calls to add, remove, and edit authenticated tokens, which substitute for users in the upload system.

The uploader admin provides a user interface to manage these tokens. During development is a good idea to have this running to facilitate access to the tokens. The tokens can also be viewed directly in the uploader-api database.

**The Imagery Uploader ([oam-uploader](https://github.com/hotosm/oam-uploader))**

*This web application depends on the Uploader API*

This repo contains the front-end form which allows authenticated users to publish images to the processing queue, and to check the processing status of submitted tasks.

It depends on a connection to the API in order to submit datasets and associated metadata to the processing queue, check upload status, and authenticate tokens. As described above, this page depends on the API for most of its functionality, and depends on the admin panel to generate tokens for authentication, so both components must be active during development.

### The OAM catalog ecosystem

The OAM catalog software ecosystem consists of three GitHub repositories housing the [API](https://github.com/hotosm/oam-catalog), the [Imagery Browser](https://github.com/hotosm/oam-browser), and the [OAM Landing Page](https://github.com/hotosm/openaerialmap.org).

**The Catalog API ([oam-catalog](https://github.com/hotosm/oam-catalog))**

The API provides the endpoints for browsing the available indexed imagery which feeds into the Imagery Browser. Other routes provide statistics that power the OpenAerialMap homepage.

This code repository also contains a worker that can index Open Imagery Network metadata from Amazon S3 buckets. The worker first reads the "OIN Register File" to determine which buckets it needs to read and process. 

- If you want to catalog data that is not available in the Open Imagery Network, provide an environment variable that points to a hosted register file [in the same format](https://github.com/openimagerynetwork/oin-register/blob/master/master.json). You will also have to store the data in an Amazon S3 bucket using the [OIN specification](https://github.com/openimagerynetwork/oin-metadata-spec).

**The Imagery Browser ([oam-browser](https://github.com/hotosm/oam-browser))**

*This web application depends on the Catalog API*

The Imagery Browser visualizes the data available in the catalog by polling the OAM Catalog API. It provides views such as latest uploaded imagery, imagery from different periods in time and different resolutions. The imagery is also downloadable.

**The OpenAerialMap Landing Page ([openaerialmap.org](https://github.com/hotosm/openaerialmap.org))**

*This web application depends on the Catalog API*

The website landing page shows latest imagery available in the catalog as well as statistics such as number of images catalogued and number of providers.
