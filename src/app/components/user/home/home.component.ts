import { isNgTemplate } from '@angular/compiler';
import { Attribute, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IllustrationsService } from 'src/app/services/illustrations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestIllustrations$: Observable<any>
  configPaginationIllustrations;
  constructor(public illustrationsService: IllustrationsService, public route: Router) { 
    
  }

  ngOnInit(): void {
    this.latestIllustrations$ = this.illustrationsService.getLatestIllustrations(4);
    this.initPagination()
  }

  initPagination(): void {
    this.configPaginationIllustrations = {
			itemsPerPage: 1,
			currentPage: 1,
			id: "latestIllustration",
		};
  }

  public pageLatestIllustrationChanged(event): void {
		this.configPaginationIllustrations.currentPage = event;
  }
  
  public next(observableLatestIllustrations): void {
    if (this.configPaginationIllustrations.currentPage < observableLatestIllustrations.length) {
      this.configPaginationIllustrations.currentPage++;
    } else {
      this.configPaginationIllustrations.currentPage = 1;
    }
  }

  public prev(observableLatestIllustrations):void {
    if (this.configPaginationIllustrations.currentPage > 1) {
      this.configPaginationIllustrations.currentPage--;
    } else {
      this.configPaginationIllustrations.currentPage = observableLatestIllustrations.length;
    }
  }

  public goToIllustration(illustrationId): void {
    const url = "/illustration/" + illustrationId;
		this.route.navigateByUrl(url);
  }
 
}
