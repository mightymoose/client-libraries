import { Injectable } from '@angular/core';
import { BackendUser, JSONAPIListResponse, BackendUserListResponse, UserEndpoint } from 'mmoaig-core';
import { Resolve } from '@angular/router';
import { BackendService } from 'mmoaig-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveUserListService implements Resolve<BackendUserListResponse> {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendUserListResponse> {
    return this.backend.list(UserEndpoint);
  }
}
