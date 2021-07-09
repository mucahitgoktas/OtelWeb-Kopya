import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'yeni-rezervasyon',
  templateUrl: './yeni-rezervasyon.component.html',
  styleUrls: ['./yeni-rezervasyon.component.css']
})
export class YeniRezervasyonComponent implements OnInit {

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }

  addGuest(id: number,odano: number,adi: string,soyadi: string,ucret: string,tckimlikno: string,heskodu: string,notlar: string)
  {
    
    const g = new Guest(0,odano,adi,soyadi,tckimlikno,heskodu,ucret,notlar);
    this.guestService.saveGuest(g);

  }

  title="Misafir Kayıt";
  aboutT="Yeni Misafir Kaydı";

}
