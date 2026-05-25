import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import  Donnees  from './datas.json';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

interface DONNEES {
  id: String;
  name: String;
  specialty: String;
  note: String;
	location: String;
	about: String;
	email: String;
	website: String;
	category: String;
	top: Boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project_bilan_2';
  Donnee: DONNEES[] = Donnees;
  constructor(){
    console.log(this.Donnee);
  }
}
