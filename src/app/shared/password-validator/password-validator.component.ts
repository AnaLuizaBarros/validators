import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {
  @Input() formValidator!: AbstractControl;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }

}
