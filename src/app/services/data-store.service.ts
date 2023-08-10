import { Injectable } from '@angular/core';
import { Photo } from '../types/photo';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  selectedPhoto: Photo | undefined;

  constructor() { }

  setSelectedPhoto(photo:Photo):void {
    this.selectedPhoto = photo;
  }

  getSelectedPhoto(): Photo | undefined {
    return this.selectedPhoto;
  }

  clearSelectedPhoto(): void {
    this.selectedPhoto = undefined;
  }
}
