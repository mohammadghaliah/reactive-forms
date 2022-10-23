import { Component, VERSION } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myModel = new FormGroup({
    fisrtName: new FormControl(''),
    lastName: new FormControl(''),
    subInfo: new FormGroup({
      address: new FormControl(''),
      zibCode: new FormControl(''),
    }),
  });

  fisrtName = new FormControl('');

  myModelformBuilder = this.formBuilder.group({
    fisrtName: ['defalut value', Validators.required],
    lastName: ['', Validators.required],
    subInfo: this.formBuilder.group({
      address: ['', Validators.required],
      zibCode: ['', Validators.required],
    }),
  });

  constructor(private formBuilder: FormBuilder) {
    // this.myModel.patchValue({
    //   fisrtName: 'fisrtName',
    //   lastName: 'lastName',
    //   subInfo: {
    //     address: 'address',
    //     zibCode: 'zibCode',
    //   },
    // });
    // this.fisrtName.setValue('fisrtName');
    // this.myModelformBuilder.patchValue({
    //   fisrtName: 'fisrtName',
    //   lastName: 'lastName',
    //   subInfo: {
    //     address: 'address',
    //     zibCode: 'zibCode',
    //   },
    // });
  }
}

// https://www.youtube.com/watch?v=L5nSKNz6WKE&list=PLcfD4HARQRF_ayBPwt4IF6jrFZOcnPAYG&index=25
