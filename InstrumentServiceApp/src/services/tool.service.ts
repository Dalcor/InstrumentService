import { Injectable } from '@angular/core';
import { Tool } from '../shared/tool';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  tool: Tool;
  private REST_API_SERVER = "http://localhost:8000/api/GetCatalog";

  constructor(private http: HttpClient) { }

  public getTools() {
    return this.http.get(this.REST_API_SERVER);
  }
}
