import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from './API';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  searchCourse(searchTerm: string) {
    return this.http.get(`${API}/Elearn?search=${searchTerm}`);
  }
}
