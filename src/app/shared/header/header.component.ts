import { Component, OnInit } from '@angular/core';
declare  var $ : any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("document").ready(function(){
    
    })
  }

}
