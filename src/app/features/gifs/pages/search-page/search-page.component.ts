import { Component, inject } from '@angular/core';
import { GifListItemComponent } from "../../components/gif-list/components";
import { GifStore } from '../../services/store-gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListItemComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifStore = inject(GifStore) 

  onSearch = (query: string) => {
    this.gifStore.searchGifs(query)
  }
}
