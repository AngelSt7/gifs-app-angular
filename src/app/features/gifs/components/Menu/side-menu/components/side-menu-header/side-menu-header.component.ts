import { Component } from '@angular/core';
import { IEnvironment, environment } from 'src/environments/environment';

@Component({
  selector: 'gif-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
})

export class SideMenuHeaderComponent {
  envs : IEnvironment = environment
}
