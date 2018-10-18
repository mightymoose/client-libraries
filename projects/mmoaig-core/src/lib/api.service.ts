import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from './injection-tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, @Inject(API_BASE) private apiBase: string) { }

  get<T>(url: string, options = {}): Observable<T> {
    return this.http.get<T>(`${this.apiBase}${url}`, options);
  }

  put<T>(url: string, body: T, options = {}): Observable<T> {
    return this.http.put<T>(`${this.apiBase}${url}`, body, options);
  }

  post<T, U>(url: string, body: T, options = {}): Observable<U> {
    return this.http.post<U>(`${this.apiBase}${url}`, body, options);
  }
}
