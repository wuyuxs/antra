import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    bio: new FormControl('')
  })
}
