---
layout: article
id: Contributor Components
parent: Ecosystem

permalink: ecosystem/contributor-group/

title: Ecosystem
introduction: An overview of the OpenAerialMap components and how they connect with each other.
---

# Contributor Components
<figure class="align-center">
<img src="{{ site.baseurl }}/assets/graphics/content/ecosystem_oam_uploader.png" alt="Contributor Group" />
</figure>

Components that allow a contributor to add data to the system through an upload form. The data is added to the HOTOSM imagery bucket. Contributors with a large amount of imagery should consider [setting up their own imagery bucket](https://github.com/openimagerynetwork/oin-register) within the OIN network.

## OAM Uploader
A web form that a contributor can use to add datasets to OpenAerialMap. This form requires an access token for authorization, which can be requested from an OpenAerialMap team member. It also includes a status page to view the status of a specific upload process.

- [Link to Github](https://github.com/hotosm/oam-uploader) 
- [Link to Documentation]({{ site.baseurl }}/uploader/uploader-form/)

## OAM Uploader Admin
A web application that the OpenAerialMap staff uses to manage API tokens.

- [Link to Github](https://github.com/hotosm/oam-uploader-admin)
- [Link to Documentation]({{ site.baseurl }}/uploader/token-manager)

## OAM Uploader API
The OAM Uploader API is built using two sub-components. The worker processes uploaded imagery and pushes to an imagery bucket. The API receives form data and manages authorization tokens.

- [Link to Github](https://github.com/hotosm/oam-uploader-api)
- [Link to Documentation]({{ site.baseurl }}/uploader/api-server)

**API subcomponent**
Written in NodeJS

- Manages access tokens and authentication
- Receives imagery data (via remote url or file upload). This data is then stored in a database (MongoDB) as jobs to be later processed by the worker.
  
**Worker subcomponent**
Written in NodeJS

- Processes the jobs from the database. This is an asynchronous process that happens periodically.
- Generates final TIF images and metadata (following the Open Imagery Network specification) and uploads them to the HOTOSM OIN imagery bucket.
