import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  selectorNav: string;
  privateMessage$: Observable<any>
  constructor(private route: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.privateMessage$ = this.contactService.allMessages();
  }

  logout():void {
    firebase.auth().signOut().then(() => {
      this.route.navigateByUrl('/home')
    })
  }

  setSelectorNav(selection): void {
    this.selectorNav = selection
  }

}
