---
layout: article
id: Ecosystem

permalink: ecosystem/

title: Ecosystem
introduction: The whole OAM ecosystem and how the different tools connect with each other.
---

So you want to setup the whole oam ecosystem. Here's how to:

There are 2 main groups in this system. Let's call them
- The "view group"
- The "contribution group"



# The view group
Basically all the components that allow the user to view the data in the system.

## OAM Catalog
The oam-catalog in the main component of this group. What it does:
- Indexes all the images from the sources describes in the OIN register
- Stores everything in a standard format in a mongoDB
- Provides an API for apps to find theses images.

Needs a server running node and mongodb

## OAM Browser
It's an app that allows the user to search for the imagery by browsing a map.
It uses the catalog API.
Frontend app, after being built runs anywhere

## Openaerialmap aka homepage
Homepage for the project.
Also uses the catalog api to show some stats.
Frontend app, after being built runs anywhere

## OAM Status
Shows the status of the catalog API.
- Needs a server running node
- Uses new relic for the overall health and the catalog api to show last index jobs.



# The contribution group
Components that allow the user to contribute with data to the system.

## OAM Uploader API
What it does:
- Makes an api available to:
  - manage access tokens
  - upload imagery data (via remote url or file upload). This data is then stored in a database to be later processed.
- Processes the data from the database. This is an asynchronous process that happens every so often.
  - This worker generates the final TIF images and corresponding metadata and uploads everything to a S3 bucket (this bucket is part of the OIN register and will later be indexed by the catalog).

Needs a server running node and mongodb
Also needs a S3 bucket

## OAM Uploader Admin
Just a User Interface to manage the tokens (because doing so through the api is complicated)
It uses the uploader API

Frontend app, after being built runs anywhere

## OAM Uploader
The form to upload the imagery data. Needs a authentication token to be used (this is where the uploader admin interface come in handy)
It also includes a status page to view the status of a specific upload process. (because of the asynchronous worker)
Uses the uploader API