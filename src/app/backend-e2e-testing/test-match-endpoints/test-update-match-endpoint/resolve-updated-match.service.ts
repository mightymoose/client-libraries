import { Injectable } from '@angular/core';
import { Resolve, Params, ActivatedRouteSnapshot } from '@angular/router';
import { BackendService, MatchEndpoint } from 'mmoaig-core';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveUpdatedMatchService implements Resolve<any> {
  constructor(private backend: BackendService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.backend.update(MatchEndpoint, 1, {status: route.params.newStatus});
  }
}
