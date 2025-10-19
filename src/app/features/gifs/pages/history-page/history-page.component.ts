import { Component, inject, effect, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryService } from '@/app/features/core/services/query.service';
import { CacheService } from '../../services/cache.service';
import { GifStore } from '../../services/store-gifs.service';
import { GifListItemComponent } from "../../components/gif-list/components";

@Component({
  selector: 'app-history-page',
  imports: [GifListItemComponent],
  templateUrl: './history-page.component.html',
})
export default class HistoryPageComponent {
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  private queryService = inject(QueryService);
  private gifStoreService = inject(GifStore);

  params = this.queryService.getParamsSignal(this.activeRoute, ['query']);
  gifsByKey = computed(() => this.gifStoreService.getHistory(this.params()?.['query'] ?? ''));

  constructor() {
    effect(() => {
      const query = this.params()?.['query'];
      if (!query) {
        this.router.navigate(['/dashboard/search']);
      }
    });
  }
}
