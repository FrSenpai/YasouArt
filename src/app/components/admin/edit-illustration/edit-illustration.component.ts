import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { IllustrationsService } from 'src/app/services/illustrations.service';
import { catchError, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-edit-illustration',
  templateUrl: './edit-illustration.component.html',
  styleUrls: ['./edit-illustration.component.css']
})
export class EditIllustrationComponent implements OnInit, OnDestroy {
  private NO_ILLUSTRATION = <any>{
    titre: '',
    description: '',
    url_image: '',
    creation_timestamp: ''
  }
  private readonly onDestroy = new Subject < void > ();
  editItem: FormGroup;
  public illustrationItem: BehaviorSubject<any> = new BehaviorSubject<any>(this.NO_ILLUSTRATION)
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private illustrationsService: IllustrationsService, private route: Router ) { }

  ngOnInit(): void {
    this.initForm()
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.illustrationsService.getIllustrationById(id).pipe(takeUntil(this.onDestroy)).subscribe((illustration) => {
        this.illustrationItem.next(illustration)
        this.editForm(this.illustrationItem.value.titre, this.illustrationItem.value.description, this.illustrationItem.value.url_image)
      })
    } else {
      this.route.navigateByUrl("/home");
    }
    
  }

  public initForm():void {
    this.editItem = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(350)]],
      desc: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]],
      url_image: ["", [Validators.required, Validators.minLength(15), Validators.maxLength(1000)]]
    })
  }

  public editForm(title, desc, url_image): void {
    this.editItem = this.fb.group({
      title: [title, [Validators.required, Validators.minLength(5), Validators.maxLength(350)]],
      desc: [desc, [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]],
      url_image: [url_image, [Validators.required, Validators.minLength(15), Validators.maxLength(1000)]]
    })
  }

  public ngOnDestroy(): void {
		this.onDestroy.next();
	}

}
