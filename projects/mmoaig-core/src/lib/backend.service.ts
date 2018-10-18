import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Endpoint, JSONAPIListResponse, JSONAPIResponse } from './backend';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private api: ApiService) { }

  list<T, A, R>(endpoint: Endpoint<T, A, R>): Observable<JSONAPIListResponse<T, A, R>> {
    return this.api.get<JSONAPIListResponse<T, A, R>>(endpoint.url);
  }

  get<T, A, R>(endpoint: Endpoint<T, A, R>, id: number): Observable<JSONAPIResponse<T, A, R>> {
    return this.api.get<JSONAPIResponse<T, A, R>>(`${endpoint.url}/${id}`);
  }

  update<T, A, R>(endpoint: Endpoint<T, A, R>, id: number, attributes: A): Observable<A> {
    return this.api.put<A>(`${endpoint.url}/${id}`, attributes);
  }

  create<T, A, R>(endpoint: Endpoint<T, A, R>, attributes: A): Observable<JSONAPIResponse<T, A, R>> {
    return this.api.post<A, JSONAPIResponse<T, A, R>>(endpoint.url, attributes);
  }
}
