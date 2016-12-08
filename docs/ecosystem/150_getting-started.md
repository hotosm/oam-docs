---
layout: article
id: Getting Started
parent: Ecosystem

permalink: ecosystem/getting-started/

title: Ecosystem
introduction: An overview of the OpenAerialMap components and how they connect with each other.
---

This is an overview of the OAM ecosystem. The components can be divided into two main functionalities:

- The "Catalog" group: components related to processing metadata and creating the OpenAerialMap Catalog
- The "Contributor" group: components related to uploading new data to OpenAerialMap as a contributor


# The Catalog group
<figure class="align-center">
<img src="{{ site.baseurl }}/assets/graphics/content/ecosystem_oam_catalog.png" alt="Catalog Group" />
</figure>
Components that index and serve imagery metadata. The Open Imagery Network (OIN) specification allows providers to annotate their imagery with metadata and register them to the network in a standard way. The OAM Catalog is a collection of OIN spec'd metadata.

## OAM Catalog
The OAM Catalog in the main component of this group. It contains two sub-components that work together to provide imagery metadata to users: The catalog worker and the catalog API. 

[Link to Github](https://github.com/hotosm/oam-catalog) 

### Worker subcomponent
Written in NodeJS, runs periodically.

- Reads the OIN registry JSON file that contains the location of the imagery and metadata provided by OpenAerialMap partners, as well as the HOTOSM bucket. These are called "imagery buckets" 
- Scans the buckets for metadata
- Indexes the metadata to the OAM Catalog database (MongoDB instance).

### API subcomponent
The API provides an interface to query the catalog for metadata over time and by area. It also provides simple statistics that power the OAM homepage. This component is written in NodeJS

## OAM Browser
A web application that allows a visitor to the website to search for the imagery by browsing a world map and toggling parameters. In the background, it queries the catalog API and displays the results on the map.

[Link to Github](https://github.com/hotosm/oam-browser)

## OAM Homepage
A web application that serves as a homepage for OpenAerialMap. The homepage queries the API for simple statistics and latest imagery.  

[Link to Github](https://github.com/hotosm/openaerialmap.org)

## OAM Status
Shows the status of the catalog API. Written in NodeJS, it uses New Relic to check for the overall health of the API as well as monitoring the catalog worker.

[Link to Github](https://github.com/hotosm/oam-status)

# The Contributor group
<figure class="align-center">
<img src="{{ site.baseurl }}/assets/graphics/content/ecosystem_oam_uploader.png" alt="Contributor Group" />
</figure>

Components that allow a contributor to add data to the system through an upload form. The data is added to the HOTOSM imagery bucket. Contributors with a large amount of imagery should consider setting up their own imagery bucket within the OIN network.

## OAM Uploader
A web form that a contributor can use to add datasets to OpenAerialMap. This form requires an access token for authorization, which can be requested from an OpenAerialMap team member. It also includes a status page to view the status of a specific upload process.

[Link to Github](https://github.com/hotosm/oam-uploader)

## OAM Uploader Admin
A web application that the OpenAerialMap staff uses to manage API tokens.

[Link to Github](https://github.com/hotosm/oam-uploader-admin)

## OAM Uploader API
The OAM Uploader API is built using two sub-components. The worker processes uploaded imagery and pushes to an imagery bucket. The API receives form data and manages authorization tokens.

[Link to Github](https://github.com/hotosm/oam-uploader-api)

### API subcomponent
Written in NodeJS

- Manages access tokens and authentication
- Receives imagery data (via remote url or file upload). This data is then stored in a database (MongoDB) as jobs to be later processed by the worker.
  
### Worker sucomponent
Written in NodeJS

- Processes the jobs from the database. This is an asynchronous process that happens periodically.
- Generates final TIF images and metadata (following the Open Imagery Network specification) and uploads them to the HOTOSM OIN imagery bucket.