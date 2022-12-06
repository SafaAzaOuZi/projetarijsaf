import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  ngOnInit(): void {
  }
  url="https://www.youtube.com/embed/yPm3gZVA7OU";
  constructor(public sanitizer:DomSanitizer){}
  getSafeUrl(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
