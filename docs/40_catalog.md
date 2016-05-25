---
layout: article
id: Catalog

permalink: catalog/

title: Catalog
introduction: The Catalog is a RESTful index API of all imagery and metadata available within the OAM system.
---

OpenAerialMap Catalog is an application programming interface (API) that serves metadata about available images and map layers. The API provides access to all imagery metadata information and endpoints to list images available, map layer services available, as well as simple analytics.

### Quick Start
The Catalog API is split into three available endpoints:

- a metadata endpoint `/meta`
- a tiled map service (TMS) listing endpoint `/tms`
- and an analytics endpoint `/analytics`

To get started, you can access the metadata endpoint here: [http://api.openaerialmap.org/meta](http://api.openaerialmap.org/meta). 

### Further documentation 
Check out the full [API documentation](http://hotosm.github.io/oam-catalog/) for methods to filter and limit results, get an individual image metadata, or add TMS endpoints to the listing.

### Catalog status
Having the catalog up and running is crucial for the whole OAM Ecosystem. Its status is monitored and is available at [status.openaerialmap.org](http://status.openaerialmap.org).

### Source code and development
The `oam-catalog` is completely open source and the [code and instructions](https://github.com/hotosm/oam-catalog) are available on github under the **BSD 3-Clause license**.
