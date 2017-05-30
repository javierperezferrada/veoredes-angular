import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public phone: AbstractControl;
  public message: AbstractControl;
  public submitted:boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.name = this.contactForm.controls['name'];
    this.email = this.contactForm.controls['email'];
    this.phone = this.contactForm.controls['phone'];
    this.message = this.contactForm.controls['message'];
  }
  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      phone: ['', Validators.compose([Validators.required, ,Validators.pattern('[0-9]{9}')])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }
  public onSubmit(values): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      // your code goes here
      console.log(values);
      /*this.expenseReportService.add({name:values.name, description:values.description}).subscribe(res =>{
        alert(res);
      })*/
    }
    this.contactForm.reset();
  }

}
