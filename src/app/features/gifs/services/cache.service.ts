import { computed, effect, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces';

const getToLocalStorage = () => {
    const data = localStorage.getItem('history')
    return data ? JSON.parse(data) : {}
}

@Injectable({ providedIn: 'root' })
export class CacheService {

    cacheHistory = signal<Record<string, Gif[]>>(getToLocalStorage())
    cacheKeys = computed(() => Object.keys(this.cacheHistory()))

    saveHistory = effect(() => {
        localStorage.setItem('history', JSON.stringify(this.cacheHistory()))
    })

}