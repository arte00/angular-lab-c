import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, EMPTY, tap} from "rxjs";
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id!: number;
  public person!: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personLsService: PersonLsService
  ) {
  }

  ngOnInit(): void {

    this.route.params.pipe(
      tap(params => {
        this.id = params['id'];
        this.person = this.personLsService.getPerson(this.id);
      })
    )
      .subscribe();
  }

}
