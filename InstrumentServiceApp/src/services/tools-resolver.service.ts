import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ToolService } from '../services/tool.service';

@Injectable()
export class ToolsResolver implements Resolve<any> {
    constructor(private toolService: ToolService,
        private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let tool = route.params['tool'];
        let detail = route.params['detail'];
        return this.toolService.getCategoryTools(tool, detail).catch(
        error => {
            throw new Error();
        });
    }
}