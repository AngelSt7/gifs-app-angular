import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QueryService {

    getParamsSignal(activeRoute: ActivatedRoute, keys: string[]) {
        return toSignal(
            activeRoute.params.pipe(
                map(params => {
                    const filtered: Record<string, string | null> = {};
                    const cleared = this.clearParams(params);
                    for (const key of keys) {
                        filtered[key] = cleared[key] ?? null;
                    }
                    return filtered;
                })
            )
        );
    }

    clearParams = (params: Params) => {
        return Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== null))
    }


}