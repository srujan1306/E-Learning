import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  searchCourse(searchTerm: string) {
    return this.http.get(`http://localhost:4000/Elearn?search=${searchTerm}`);
  }
}
