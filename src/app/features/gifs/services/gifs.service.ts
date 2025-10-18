import { environment } from '@/environments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../core/services/http.service';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(ApiService)

  loadTrendingGifs(){
    this.http.get(`/gifs/trending`,{
      params: {
        api_key: environment.giphy_url,
        limit: 20
      }
    })


  }

}
