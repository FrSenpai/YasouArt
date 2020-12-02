import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  selectorNav: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logout():void {
    firebase.auth().signOut().then(() => {
      this.route.navigateByUrl('/home')
    })
  }

}
