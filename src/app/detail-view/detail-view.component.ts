import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { Photo } from '../types/photo';
import { Router } from '@angular/router';

/**
 * This component displays the large version of the image and some associated metadata about the image.
 * It uses the Photo object created by the unsplash service.
 * @see types/photo.ts
 * @see services/unsplash-service.service.ts
 */
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  selectedPhoto: Photo | undefined;

  constructor(
    private dataStore: DataStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedPhoto = this.dataStore.getSelectedPhoto();
    console.log('data', this.selectedPhoto);
    
    // Go back to the first page if the image is not selected
    if (!this.selectedPhoto) {
      this.router.navigate(['/photos']);
    }
  }

  back() : void {
    this.router.navigate(['/photos']);
  }

}
