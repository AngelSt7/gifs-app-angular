import { Component } from '@angular/core';
import { GifListComponent } from "@/app/features/gifs/components";

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})

export default class TrendingPageComponent {
}
