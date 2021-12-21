import { Injectable } from '@angular/core';
import { MobileI } from './mobile-i';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalService {



  constructor() { }
  getMobile():MobileI[]{
    return [{id:101,mobile_name:"Samsung",mobile_price:25000},
    {id:102,mobile_name:"Moto",mobile_price:45000},
    {id:103,mobile_name:"RealME",mobile_price:20000},
    ]

}
}
