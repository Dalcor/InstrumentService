import { Injectable } from '@angular/core';
import { Tool } from '../shared/tool';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, from, empty } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { baseApiURL } from '../shared/baseapiurl';
import { baseURL } from 'src/shared/baseurl';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private GetCatalog = "http://localhost:8000/api/GetCatalog";
  private GetDetails = "http://localhost:8000/api/GetInstrumentDetail";
  private GetCategoryTools = baseApiURL;
  constructor(private http: HttpClient,
    private router: Router) { }

  public getTools(): Observable<Tool[]> {
    // return this.http.get(this.GetCatalog);
    return this.http.get<Tool[]>(baseApiURL + '/GetCatalog');
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  public getCartItems(vendorArray) {
    return this.http.post(baseApiURL + "/GetCartItems", vendorArray);
  }

  public getToolDetails() {
    return this.http.get(this.GetDetails);
  }

  public getCategoryTools(instrument, tool) {
    return this.http.get(this.GetCategoryTools + "/" + instrument +"/" + tool)
    .catch(
      (error: HttpErrorResponse) => {
        if(error.status === 404) {
          this.router.navigate(['/404']);
        }
        return of(empty);
      }
    );
  }

  public getTool(instrument, tool, vendor) {
    return this.http.get(this.GetCategoryTools + "/" + instrument +"/" + tool + "/" + vendor);
  }

  public changeTool(tool: Tool):Observable<number> {
    return of(tool.id);
  }

  public GetFilterTags() {
    return this.http.get(baseApiURL + "/GetFilterTags");
  }
}
