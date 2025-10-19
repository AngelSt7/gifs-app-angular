import { effect, inject, Injectable, signal } from "@angular/core";
import { Gif } from "../interfaces";
import { GifService } from "./gifs.service";
import { CacheService } from "./cache.service";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifStore {

    gifService = inject(GifService)
    cacheService = inject(CacheService)

    isLoading = signal(false);

    search = signal<Gif[]>([]);
    gifs = signal<Gif[]>([]);

    constructor() {
        this.loadTrending()
    }

    loadTrending() {
        this.isLoading.set(true);
        this.gifService.getTrendingGifs().subscribe({
            next: (gifs) => this.gifs.set(gifs),
            error: () => console.log("ocurrio un error"),
            complete: () => this.isLoading.set(false)
        });
    }

    searchGifs(query: string) {
        this.isLoading.set(true);
        this.gifService.serachGifs(query)
            .pipe(
                tap(items => this.cacheService.cacheHistory.update(history => ({
                    ...history,
                    [query.toLowerCase()]: items
                })))
            )
            .subscribe({
                next: (gifs) => this.search.set(gifs),
                error: () => console.log("ocurrio un error"),
                complete: () => this.isLoading.set(false)
            })
    }

    getHistory(query: string) {
        return this.cacheService.cacheHistory()[query.toLowerCase()] ?? []
    }
}
