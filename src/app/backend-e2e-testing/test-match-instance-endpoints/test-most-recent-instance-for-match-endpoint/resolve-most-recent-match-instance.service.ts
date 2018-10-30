import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchInstanceService } from 'mmoaig-core';

@Injectable({
  providedIn: 'root'
})
export class ResolveMostRecentMatchInstanceService implements Resolve<any> {
  constructor(private matchInstance: MatchInstanceService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.matchInstance.mostRecentForMatch(2);
  }
}
