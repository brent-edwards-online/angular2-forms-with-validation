import { Contact } from './../../../../shared/models/contact';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ContactService } from '../../../../shared/services/contact.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
  providers: [ContactService]
})
export class ModelDrivenComponent implements OnInit {
  moods = [ "Happy", "Hungry", "Fat", "Angry", "Meh" ]
  genders = ['Male', 'Female', 'Transgender', 'None']
  forbiddenFullNames = ['Brent', 'Bob']
  contactForm: FormGroup;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'userdata': new FormGroup({
        'fullname': new FormControl('Full Name Default', [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl('model@ng2.com', [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required)
      }),

      'claim': new FormControl('Claim to fame'),
      'gender': new FormControl('Male'),
      'mood': new FormControl('Meh'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(): void {
    let contact: Contact = new Contact();
    contact.fullName = this.contactForm.value.userdata.fullname;
    contact.email = this.contactForm.value.userdata.email;
    contact.password = this.contactForm.value.userdata.password;
    this.contactService.saveContact(contact);
    console.log(this.contactForm.value);
  }

  onAddHobbie(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.contactForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl) : {[s: string]: boolean}{
    if( this.forbiddenFullNames.indexOf(control.value) !== -1)
    {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
