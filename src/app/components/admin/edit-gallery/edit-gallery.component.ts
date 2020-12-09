import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IllustrationsService } from 'src/app/services/illustrations.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {
  galleryItems$: Observable<any>
  configPagination:any;
  constructor(private illustrationsService: IllustrationsService, public route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.galleryItems$ = this.illustrationsService.getAllIllustrations();
    this.configPagination = {
			itemsPerPage: 10,
			currentPage: 1,
			id: "gallery",
		};
  }

  public pageChanged(event): void {
		this.configPagination.currentPage = event;
  }

  public deleteItem(id): void {
    this.illustrationsService.deleteIllustration(id).then((result)=> {
      this.toastr.success("Suppression effectuée !")
    }).catch((error) => {
      this.toastr.error("Une erreur lors de la suppression est survenue.");
    })
  }

}
