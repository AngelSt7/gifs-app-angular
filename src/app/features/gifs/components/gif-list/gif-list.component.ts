import { Component, inject, signal } from '@angular/core';
import { GifListItemComponent } from "./components";
import { GifStore } from '../../services/store-gifs.service';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  store = inject(GifStore);

 
}
