import { environment } from '@/environments';
import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../core/services/http.service';
import { GiphyResponse } from '../interfaces';
import { GifMapper } from '../mapper';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(ApiService);
  
  trendingGifsLoading = signal(true)

  getTrendingGifs() {
    return this.http.get<GiphyResponse>('/gifs/trending', {
      params: { api_key: environment.api_key, limit: 20 }
    }).pipe(
      map((response) => GifMapper.mapGiphy(response.data)) 
    );
  }

  serachGifs(query: string) {
    return this.http.get<GiphyResponse>('/gifs/search', {
      params: { api_key: environment.api_key, q: query, limit: 20 }
    }).pipe(
      map((response) => GifMapper.mapGiphy(response.data))
    )
  }
}
