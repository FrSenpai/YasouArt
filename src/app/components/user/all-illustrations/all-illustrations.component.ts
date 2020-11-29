import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IllustrationsService } from 'src/app/services/illustrations.service';

@Component({
  selector: 'app-all-illustrations',
  templateUrl: './all-illustrations.component.html',
  styleUrls: ['./all-illustrations.component.css']
})
export class AllIllustrationsComponent implements OnInit {
  allIllustrations$:Observable<any>;
  configPaginationIllustrations;
  constructor(private illustrationsService: IllustrationsService, private route: Router) { }

  ngOnInit(): void {
    this.allIllustrations$ = this.illustrationsService.getAllIllustrations()
    this.initPagination()
  }
  //Blabla commit
  initPagination() {
    this.configPaginationIllustrations = {
			itemsPerPage: 10,
      currentPage: 1,
			id: "paginationIllustrations",
		};
  }

  public pageChanged(event): void {
		this.configPaginationIllustrations.currentPage = event;
  }
  public goToIllustration(illustrationId): void {
    const url = "/illustration/" + illustrationId;
		this.route.navigateByUrl(url);
  }

  addIllu() {
    const titre = 'Random';
    const description = "Postremo ad id indignitatis est ventum, ut cum peregrini ob formidatam haut ita dudum alimentorum inopiam pellerentur ab urbe praecipites, sectatoribus disciplinarum liberalium inpendio paucis sine respiratione ulla extrusis, tenerentur minimarum adseclae veri, quique id simularunt ad tempus, et tria milia saltatricum ne interpellata quidem cum choris totidemque remanerent magistris"
    const imgUrl = 'https://cdn.discordapp.com/attachments/438805092981014550/776999134350934027/Illustration15.jpg'

    this.illustrationsService.addIllustration(titre, description, imgUrl)
  }
}
