import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
// const API = 'https://66b0acbf6a693a95b539b996.mockapi.io';
// const API = 'http://localhost:4000';
const API = 'https://e-learn-nodejs-backend.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  searchCourse(searchTerm: string) {
    return this.http.get(`${API}/Elearn?search=${searchTerm}`);
  }
}
