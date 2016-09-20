---
layout: article
id: Uploader Form
parent: Uploader

permalink: uploader/uploader-form/

title: Uploader Form
introduction: Add imagery to the OAM database with the uploader form.
---

The upload form is the way for users to contribute to the OAM imagery database.

<figure class="align-center">
  <img src="{{ site.baseurl }}/assets/graphics/content/uploader/form.png" alt="Screenshot" />
</figure>

### Token
Users need a valid token to submit imagery. This helps the OAM team ensure the quality of the submitted materials.  
The token can be requested either by email or through a github issue. When done via the "Request token" button on the [upload form](https://upload.openaerialmap.org) the email/issue will have a template prompting the user for all the needed information.

### Contributing

In order to upload imagery to OAM, you will need to have your files stored in a publicly accessible location. This means you cannot have your files only stored on your computer, but need to stored in a location that allows downloads. Services like [Dropbox](https://www.dropbox.com) and [Google Drive](https://drive.google.com) provide easy to use file storage with methods for publicly sharing. 

#### via Dropbox

If you have your imagery stored in Dropbox, you can directly select the files you would like to upload from the Dropbox file integration. 

Select Dropbox as your Imagery Location, and Dropbox will open a dialog box to authorize and allow you to select individual files to share. Multiple files can be selected. 

Please be aware that Dropbox automatically turns on file sharing for each file selected temporarily.

#### via Google Drive

You can connect your Google Drive folder and individually select files to be uploaded. In order for OAM to download the file from Google Drive, each file must have sharing settings that allow the file to be publicly viewable. Following these steps if the file does not have sharing turned on: 

1. Navigate to your Google Drive folder
2. Right click on the file(s) you want to share and select "Share"
3. Within the "Share with others" window, select "Advanced"
4. The window will change to the "Sharing settings", click "Change" for "Who has access"
5. Select "On - Public on the web" or "On - Anyone with the link" to enable public sharing
6. Ensure "Access:Anyone (no sign-in required)" is set to "Can View"

Read more on the [Google Drive support forum](https://support.google.com/drive/answer/2494822?hl=en&ref_topic=7000947).

#### via public URL

If you have files stored in another location, copy and paste the full URL (including "http") into the Upload form box. These file locations need to be publicly accessible, meaning that anyone with the link can download from that location. 


### Source code and development
The `oam-uploader` is completely open source and the [code and instructions](https://github.com/hotosm/oam-uploader) are available on github under the **BSD 3-Clause license**.
