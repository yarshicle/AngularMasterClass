import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.invalidOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }
  // form = new FormGroup({
  //   oldPassword: new FormControl('', Validators.required),
  //   newPasswordInfo: new FormGroup({
  //     newPassword: new FormControl('', Validators.required),
  //     confirmPassword: new FormControl('', Validators.required)
  //   })
  // });

  changePassword() {
    console.log('Change Password');
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
