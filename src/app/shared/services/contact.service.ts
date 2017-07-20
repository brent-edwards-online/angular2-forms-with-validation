import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class ContactService {

  constructor() { }

  saveContact(contact:Contact):void{
    console.log(contact);
  }

  getAllContacts(): Contact[] {
    return [
      {
        fullName: "Brent Edwards",
        email: "brent@brent.com",
        password: "Password",
        claimToFame: "Claim To Fame",
        mood: "Meh",
        ageRange: "",
        highestQualification: "Doctorate"
      },
      {
        fullName: "Bob Smith",
        email: "bob@smith.com",
        password: "Password",
        claimToFame: "Claim To Fame",
        mood: "Meh",
        ageRange: "",
        highestQualification: "Doctorate"
      },
      {
        fullName: "Jo Blogs",
        email: "jo@blogs.com",
        password: "Password",
        claimToFame: "Claim To Fame",
        mood: "Meh",
        ageRange: "",
        highestQualification: "Certificate"
      }
    ];
  }

}
