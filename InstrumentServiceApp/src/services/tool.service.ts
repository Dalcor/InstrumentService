import { Injectable } from '@angular/core';
import { Tool } from '../shared/tool';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private GetCatalog = "http://localhost:8000/api/GetCatalog";
  private GetDetails = "http://localhost:8000/api/GetInstrumentDetail";

  constructor(private http: HttpClient) { }

  public getTools() {
    return this.http.get(this.GetCatalog);
  }

  public getToolDetails() {
    return this.http.get(this.GetDetails);
  }

  // public changeTool(tool: Tool) {
  //   return this.selectedId = tool.id;
  // }

  public changeTool(tool: Tool):Observable<number> {
    return of(tool.id);
  }
}
