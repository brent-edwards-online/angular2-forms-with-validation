import { Contact } from './../../../../shared/models/contact';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../../../shared/services/contact.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
  providers: [ContactService]
})
export class ModelDrivenComponent implements OnInit {
  public moods = [
    "Happy",
    "Hungry",
    "Fat",
    "Angry",
    "Meh"
  ]

  public genders = ['Male','Female','Transgender','None']

  private contactForm: FormGroup;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
        'fullname': new FormControl('Full Name Default', [Validators.required]),
        'email': new FormControl('model@ng2.com', [Validators.required]),
        'password': new FormControl('pw', Validators.required),
        'claim': new FormControl('Claim to fame'),
        'gender': new FormControl('Male'),
        'mood': new FormControl('Meh')
    });
  }

  onSubmit(){
    let contact: Contact = new Contact();
    contact.fullName = this.contactForm.value.fullname;
    contact.email = this.contactForm.value.email;
    contact.password = this.contactForm.value.password;
    this.contactService.saveContact(contact);
  }

}
