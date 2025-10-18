import { Component } from '@angular/core';
import { images } from './constants';
import { GifListItemComponent } from "./components";

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  images : string[] = images
}
