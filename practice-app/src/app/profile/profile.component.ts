import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  counter:number = 0;
  profileForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    bio: new FormControl('')
  })
  profile = {
    userName: this.profileForm.value.userName,
    email: this.profileForm.value.email,
    bio: this.profileForm.value.bio
  }
  disableReset:boolean = true;
  welcomeMsg:string = `Welcome!${this.profileForm.value.userName ? ' ' + this.profileForm.value.userName : ''}`;
  ngOnInit(): void {
    this.profileForm.get('userName')?.valueChanges.subscribe(value => {
      this.welcomeMsg = `Welcome!${value ? ' ' + value : ''}`;
    });
    this.profileForm.valueChanges.subscribe(() => {
      this.disableReset = this.isFormEmpty();
    });
  }

  saveProfile() {
    console.log(this.profileForm.value);
    this.counter++;
    this.welcomeMsg = `Welcome!${this.profileForm.value.userName ? ' ' + this.profileForm.value.userName : ''}`;
  }
  resetProfile() {
    this.profileForm.reset();
  }
  isFormEmpty():boolean {
    return !(this.profileForm.value.userName || this.profileForm.value.email || this.profileForm.value.bio);
  }
}
