import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Observable } from 'rxjs';

export interface PostDate {
  url: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}


@Injectable({
  providedIn: 'root'
})
export class KurzurlService {
  
  baseUrl = "https://localhost:7278/";
  constructor(private http: HttpClient) { }


  
  // HTTP headers
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  generateKurzUrl(data: PostDate): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'api/KurzUrl', data, {
      headers: this.getHeaders(),
    });
  }

  getShortUrl(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'api/KurzUrl/'+id);
  }

}
