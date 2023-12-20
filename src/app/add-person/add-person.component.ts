import { Component } from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  person: Person = {
    address: {

    }
  }

  constructor(
    private personLsService: PersonLsService,
    private router: Router
  ) {
  }

  public save() {
    this.personLsService.addPerson(this.person)
    this.router.navigate(['/list']);
  }

}