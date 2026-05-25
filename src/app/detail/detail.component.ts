import { Component, OnInit } from '@angular/core';
import Donnees from '../datas.json';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  Donnee: DONNEES[] = Donnees;
  donne: any;
  artId: string | null = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.artId = params.get('id');
    });
    this.donne = this.Donnee.find(element => element.id == this.artId);
  }

}
