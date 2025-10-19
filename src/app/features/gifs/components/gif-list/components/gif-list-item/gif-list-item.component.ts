import { Gif } from '@/app/features/gifs/interfaces';
import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  gif = input.required<Gif>()

}
