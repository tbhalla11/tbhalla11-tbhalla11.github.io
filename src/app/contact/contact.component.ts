import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactInfo!: FormGroup;


  constructor(private builder: FormBuilder, private service: ContactService) { }

  ngOnInit(): void {
    this.contactInfo = this.builder.group({
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    })
  }


  sendData(contactInfo: FormGroup){
    console.log((contactInfo));
    this.service.PostMessage(contactInfo).subscribe(response=>{
      location.href = "https://mailthis.to/confirm"
      console.log(response);
    }, error =>{
      console.warn(error.responseText)
      console.log({error})
    })

    // @ts-ignore
    document.getElementById("form-container").innerHTML = "Thanks! " +
      "I'll get back to you ASAP!";
  }
}
