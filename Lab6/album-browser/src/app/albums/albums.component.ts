import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.albumService.getAlbums().subscribe({
          next: (data) => this.albums = data,
          error: (err) => console.error('Error', err),
          complete: () => {
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      
  }
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}
