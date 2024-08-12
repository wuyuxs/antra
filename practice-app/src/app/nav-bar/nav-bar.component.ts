import { Component } from '@angular/core';
import { NavBarButtonComponent } from '../nav-bar-button/nav-bar-button.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navBarButtons: NavBarButtonComponent[] = [
    { label: 'Directory', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Contact Us', link: '/contact' }
  ];
}
