import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../services/unsplash-service.service';
import { DataStoreService } from '../services/data-store.service';
import { Router } from '@angular/router';
import { Photo } from '../types/photo';

/**
 * This is the starting point of the app. This component loads images from the Unsplash API and displays them.
 * Flow:
 *  - ngOnInit: This is called first automatically by Angular. This calls the setup() function.
 *  - - setup: This is called by ngOnInit and this gets the photos from the Unsplash Service.
 *  - - selectPhoto: This is called once the user clicks an image
 */

@Component({
  selector: 'app-photos-view',
  templateUrl: './photos-view.component.html',
  styleUrls: ['./photos-view.component.scss']
})
export class PhotosViewComponent implements OnInit {

  // The list of photos to display
  photos:Photo[] = [];

  loadingMessage:string = 'Loading...';

  constructor(
    private router: Router,
    private unpslash: UnsplashService,
    private dataStore: DataStoreService
  ) { }

  /**
   * Init function
   * called automatically by Angular
   */
  ngOnInit(): void {
    this.setup();
  }

  /**
   * Called by the init function. Used to load images from the API
   * @see services/unsplash-service.service.ts
   */
  async setup() {
    try {
      const photos = await this.unpslash.getPhotos();
      console.log('Got photos', photos);
      this.photos = photos;
    }
    catch (err) {
      console.error(err);
      this.loadingMessage = 'There was an error loading images from Unsplash. Check console for more information.';
    }
  }

  /**
   * Called when a user clicks on a photo
   * @param photo the selected photo
   */
  selectPhoto(photo:Photo) {
    this.dataStore.setSelectedPhoto(photo);
    console.log('selectedPhoto', this.dataStore.selectedPhoto);
    this.router.navigate(['/photo']);
  }

}
