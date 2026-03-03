import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private albumService: AlbumService,
      private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getAlbum(id).subscribe({
          next: (data) => {
              this.album = data;
              this.editedTitle = data.title;
              this.loading = false;
              this.cdr.detectChanges();
          },
          error: (error) => {
              console.error('Error fetching album:', error);
              this.loading = false;
              this.cdr.detectChanges();
          }
      });
  }

  saveTitle() {
      if (this.album && this.editedTitle && this.editedTitle !== this.album.title) {
          const updatedAlbum = { ...this.album, title: this.editedTitle };
          this.albumService.updateAlbum(updatedAlbum).subscribe({
              next: (data) => {
                  this.album = data;
                  alert('Success ✧⁠◝⁠(⁠⁰⁠▿⁠⁰⁠)⁠◜⁠✧');
                  this.cdr.detectChanges();
              },
              error: (error) => console.error('Error updating album:', error)
          });
      }
  }

  goBack() {
      this.router.navigate(['/albums']);
  }
}