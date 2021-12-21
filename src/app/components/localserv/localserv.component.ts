import { Component, OnInit } from '@angular/core';
import { ServiceLocalService } from '../service-local.service';

@Component({
  selector: 'app-localserv',
  templateUrl: './localserv.component.html',
  styleUrls: ['./localserv.component.css']
})
export class LocalservComponent implements OnInit {

  mobiles:any;
  constructor(public _mobileserv:ServiceLocalService) { }

  ngOnInit(): void {
    this.mobiles=this._mobileserv.getMobile();
  }

}
