/**
 * This file contains the definition of the Photos object used to display information about the photos in the app.
 * The objects are created in the Unsplash Service and used in the photos-view and detail-view pages.
 * @see services/unsplash-service.service.ts
 */
export interface Photo {
    id: string; // ID of the photo
    thumbnail: string;
    altDescription: string;
    description: string;
    slug: string;
    color: string;
    likes: number;
    user: string;
    fullImage: string;
}
