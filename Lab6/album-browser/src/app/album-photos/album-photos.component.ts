import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';


@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private albumService: AlbumService,
      private cdr: ChangeDetectorRef
      
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos = data.map(photo => ({...photo,
          thumbnailUrl: `https://picsum.photos/seed/${photo.id}/150` 
        }));
        
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack() {
      const id = this.route.snapshot.paramMap.get('id');
      this.router.navigate(['/albums', id]);
      this.cdr.detectChanges();
  }
}
