import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Biographie } from 'src/app/models/biographie';
import { BiographieService } from 'src/app/services/biographie.service';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.css']
})
export class BiographieComponent implements OnInit {
  biographie$: Observable<Biographie>
  constructor(private biographieService: BiographieService) { }

  ngOnInit(): void {
    this.biographie$ = this.biographieService.getBiographie()
    
  }

}
