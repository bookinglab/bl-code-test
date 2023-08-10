# BlAngularCodeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Installation

Please run `npm install` to download all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Structure

All code for the app resides under the `src/app` directory. The below file paths are relative to this location.

This app connects to the [Unsplash API](https://unsplash.com/documentation) and pulls down a selection of photos. The user can then click on an image to see more details.

The app flows as such:
- `environments/environment.ts`: This file contains essentail configuration such as the application URL and the access and secret keys for the Unsplash API
- `services/unsplash-service.service.ts`: This file contains the network calls to communicate with the Unsplash API. It also creates the "Photo" object that is used throughout the rest of the app
- `types/photo.ts`: Creates the definition of what a "photo" is within this app. This includes all properties that a photo must have
- `photos-view/photos-view.component.ts`: This is the first page. This file calls the Unsplash service to load the images
- `photos-view/photos-view.component.html`: This file displays the layout of the images from Unsplash. It also adds a "click" handler that loads the selected image into the Data Store and redirects to the next page
- `services/data-store.service.ts`: This file acts as a backing store for the application that contains all changes to the app made by the user (mimicing a traditional database). In this example, it stores the selected image
- `detail-view/detail-view.component.ts`: This file contains the logic for displaying a larger version of the selected image by getting it from the data store
- `detail-view/detail-view.component.html`: This file contains the markup for displaying the larger image and some associated metadata

### Diagram
![Flow chart of app](https://bookinglabimagerepo.s3.eu-west-1.amazonaws.com/codetest/codetest.drawio.png)

## The problem
There are 2 bugs in this application. Please find them and correct them, documenting:
- Your process for finding the bug
- Your process for fixing the bug
- Your process for testing the fix

### Bug 1
The images are not loading. Please correct this.

### Bug 2
The images are displaying at the wrong size on the details page. Please correct this.

### HINTS
- Use the console. You can press `F12` to open Developer Tools in most browsers. The Console and Network tabs will be the most useful
- Read the comments in the code to get a deeper understanding of how the app works and how each file is related
- Start at the photos-view.component.ts file and see how it uses other files to load data.