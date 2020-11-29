import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IllustrationsService } from 'src/app/services/illustrations.service';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {
  illustration$: Observable<any>
  constructor(private illustrationService: IllustrationsService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      const id = this.activatedRoute.snapshot.params.id;
      this.illustration$ = this.illustrationService.getIllustrationById(id)
    } else {
      this.route.navigateByUrl('/home')
    }
    
    
  }

}
