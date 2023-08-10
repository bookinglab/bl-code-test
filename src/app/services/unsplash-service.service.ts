import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Photo } from '../types/photo';

/**
 * This is the service that communicates with Unsplash. It loads the images from the API then creates a Photo object for each image.
 * This file is used by photos-view.component.ts to get the images.
 * @see photos-view/photos-view.component.ts
 * @see types/photo.ts
 */
@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets the images from Unsplash then creates a Photo object.
   * We map properties returned from Unsplash to our photos object.
   * @returns An array of photo objects 
   */
  async getPhotos() : Promise<Photo[]> {
    const unsplashPhotos:any = await this.http.get(`${environment.unsplashUrl}photos`).toPromise();
    if (unsplashPhotos.length > 0) {
      return unsplashPhotos.map((photo:any) => {
        const p:Photo = {
          thumbnail: photo.urls.thumb,
          altDescription: photo.alt_description,
          description: photo.description,
          slug: photo.slug,
          id: photo.slug,
          color: photo.color,
          likes: photo.likes,
          user: photo.user.username,
          fullImage: photo.urls.thumb
        };
        return p;
      });
    }

    return [];
  }
}
