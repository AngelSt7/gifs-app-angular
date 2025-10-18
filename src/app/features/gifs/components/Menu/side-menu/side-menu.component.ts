import { Component } from '@angular/core';
import { SideMenuHeaderComponent, SideMenuOptionsComponent } from "./components";

@Component({
  selector: 'gif-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})

export class SideMenuComponent { }