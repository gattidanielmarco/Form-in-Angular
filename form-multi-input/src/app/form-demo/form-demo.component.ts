import { Component, OnInit } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
 selector: 'app-form-demo',
 templateUrl: './form-demo.component.html',
 styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
 myForm: FormGroup;
 myForm2: FormGroup;
 myForm3: FormGroup;
 constructor(fb: FormBuilder, fb2: FormBuilder, fb3: FormBuilder) {
   this.myForm = fb.group({
     'sku': ['ABC123', Validators.required]
   });
   this.myForm2 = fb2.group({
     'color': ['Color', Validators.required]
   });
   this.myForm3 = fb3.group({
     'month': ['Month', Validators.required]
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
   console.log('you submitted value: ', value);
 }
}
