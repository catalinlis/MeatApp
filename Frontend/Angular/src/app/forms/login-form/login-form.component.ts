import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from "../../checks/text-input/text-input.component";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  loginForm: FormGroup = new FormGroup({});
  validatorsErrors: string[] | undefined;

  login(): void{
    const { username, password } = this.loginForm.value;

    console.log(`Username: ${username} Password: ${password}`);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
