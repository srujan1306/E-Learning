import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  searchCourse(searchTerm: string) {
    return this.http.get(
      `https://66b0acbf6a693a95b539b996.mockapi.io/Elearn?search=${searchTerm}`
    );
  }
}
