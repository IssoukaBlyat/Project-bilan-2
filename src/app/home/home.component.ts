import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import Donnees from '../datas.json';
import { RouterLink } from "@angular/router";

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
  selector: 'app-home',
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Donnee: DONNEES[] = Donnees;
}
