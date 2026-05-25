import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Donnees from '../datas.json';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  selector: 'app-liste',
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})

export class ListeComponent implements OnInit {
  Donnee: DONNEES[] = Donnees;
  donne: any;
  artId: string | null = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artId = params.get('id');
    });
    this.donne = this.Donnee.find(element => element.category == this.artId);
  }

}
