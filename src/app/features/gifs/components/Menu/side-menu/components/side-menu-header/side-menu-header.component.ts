import { Component } from '@angular/core';
import { environment } from 'src/environments';

@Component({
  selector: 'gif-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
})

export class SideMenuHeaderComponent {
  envs = environment
}
