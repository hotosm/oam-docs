---
layout: article
id: Development
parent: Uploader

permalink: uploader/development/

title: Development
introduction: Getting started with a development environment for the OAM uploader
---

### The OAM uploader ecosystem
At a high-level, the OAM uploader software ecosystem consists of three GitHub repositories housing the [API](https://github.com/hotosm/oam-uploader-api), the [administrative panel](https://github.com/hotosm/oam-uploader), and the front-end [submission form](https://github.com/hotosm/oam-uploader-admin).

The READMEs in those repositories contain more detailed information about their individual setup processes, but this document is concerned with their interdependencies and configuring the development environment as a functional whole.

### Overview of components

**The Uploader API ([oam-uploader-api](https://github.com/hotosm/oam-uploader-api))**
The API provides the endpoints used by the upload submission form, including routes for authenticating the session via a database of approved tokens, adding image URLs and metadata to the processing queue database, checking the status of a user's uploads, and checking the status of specific uploads.

It also provides the API endpoints used for managing users through the administrative form, including adding, removing and editing tokens.

Finally, it manages a queue of images by checking for new submissions to the database at regular intervals, downloading them, processing them to a standardized TIFF specification, generating metadata and thumbnails, and uploading them to an Amazon S3 bucket. The following two components require a connection to the API to function.

- When launching the API, several environment variables must be set. We suggest that you duplicate `local.sample.env` to `local.env` and fill in the data. Contact a maintainer for the full AWS credentials and database paths.

- To run, load the variables with `source local.env` and start the app with `npm start`.


**The Uploader Admin ([oam-uploader-admin](https://github.com/hotosm/oam-uploader))**
The administrative panel uses the API calls to add, remove, and edit authenticated tokens, which substitute for users in the upload system.

The uploader admin basically provides a user interface to manage these tokens. During development is a good idea to have this running to facilitate access to the tokens. The tokens can also be viewed directly in the uploader-api database.

For more information on the interface please check the [Token Manager](/uploader/token-manager/) section.

**The Uploader ([oam-uploader](https://github.com/hotosm/oam-uploader))**
The repo referred to as the uploader contains the front-end form which allows authenticated users to publish images to the processing queue, and to check the processing status of submitted tasks.

It depends on a connection to the API in order to submit datasets and associated metadata to the processing queue, check upload status, and authenticate tokens. As described above, this page depends on the API for most of its functionality, and depends on the admin panel to generate tokens for authentication, so both components must be active during development.

### Other development considerations

- It will be necessary to use [nvm](https://github.com/creationix/nvm) during development - the two forms must be built use node 4.x, while the API must be built using node 0.12.

- With the exception of the API, configuration variables can be added to `app/assets/scripts/config/local.js`, and will override any other references to the config object throughout the project. The uploader and admin forms must be configured to search for the API at the correct path, which is port 4000 by default (set in the oam-uploader-api's `root/config.js` file, or as an environment variable). Set the forms to use the correct port by adding the following to `local.js`, in both the uploader and admin panel projects:

  ```
  module.exports = {
    OAMUploaderApi: 'http://localhost:4000'
  };
  ```
