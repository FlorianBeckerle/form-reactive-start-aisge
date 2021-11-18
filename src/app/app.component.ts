import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Person } from './person.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: Person = new Person();
  regForm: FormGroup;

  ngOnInit() {
    this.regForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.regForm.value);
    Object.assign(this.person, this.regForm.value);
    console.log(this.person);
  }
}
