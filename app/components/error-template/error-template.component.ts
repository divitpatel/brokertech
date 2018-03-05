import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-template',
  templateUrl: './error-template.component.html',
  styleUrls: ['./error-template.component.css']
})
export class ErrorTemplateComponent implements OnInit {
	hardstop:boolean=false;
	throttleCapReached:boolean=false;
	contactTechSupport:boolean=false;
	loginAttemptsExceeded:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}