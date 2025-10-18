import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Link, LINKS } from '@/app/features/gifs/constants';
import { IconsModule } from '@/app/features/core';

@Component({
  selector: 'gif-side-menu-options',
  imports: [IconsModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  links : Link[] = LINKS
}
