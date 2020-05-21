import { Injectable } from '@angular/core';
import { Tool } from '../shared/tool';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { baseApiURL } from '../shared/baseapiurl';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private GetCatalog = "http://localhost:8000/api/GetCatalog";
  private GetDetails = "http://localhost:8000/api/GetInstrumentDetail";
  private GetCategoryTools = baseApiURL;
  constructor(private http: HttpClient) { }

  public getTools(): Observable<Tool[]> {
    // return this.http.get(this.GetCatalog);
    return this.http.get<Tool[]>(baseApiURL + '/GetCatalog');
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  public getToolDetails() {
    return this.http.get(this.GetDetails);
  }

  public getCategoryTools(instrument, tool) {
    return this.http.get(this.GetCategoryTools + "/" + instrument +"/" + tool);
  }

  public getTool(instrument, tool, vendor) {
    return this.http.get(this.GetCategoryTools + "/" + instrument +"/" + tool + "?vendor_code=" + vendor);
  }

  public changeTool(tool: Tool):Observable<number> {
    return of(tool.id);
  }
}
