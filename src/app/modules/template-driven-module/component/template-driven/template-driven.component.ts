import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../../../shared/models/contact';
import { ContactService } from '../../../../shared/services/contact.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
  providers: [ContactService]
})
export class TemplateDrivenComponent implements OnInit {

  public formdata: Contact = {
    fullName: "Brent Edwards",
    email: "brent@brent.com",
    password: "Password",
    claimToFame: "Claim To Fame",
    mood: "Meh",
    ageRange: "",
    highestQualification: "Doctorate"
  }

  public moods = [
    "Happy",
    "Hungry",
    "Fat",
    "Angry",
    "Meh"
  ]

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit(formReference: NgForm){
    this.contactService.saveContact(this.formdata);
  }
}
