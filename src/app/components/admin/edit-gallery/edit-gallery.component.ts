import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IllustrationsService } from 'src/app/services/illustrations.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {
  galleryItems$: Observable<any>
  constructor(private illustrationsService: IllustrationsService) { }

  ngOnInit(): void {
    this.galleryItems$ = this.illustrationsService.getAllIllustrations();
  }


}
