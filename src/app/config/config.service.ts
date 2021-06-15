import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError,Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export interface Code {
    empcode:string;
}
@Injectable()
export class ConfigService {
    private subject = new Subject<any>();
  constructor(private http: HttpClient) { }
    public code: any;
    sendcode(message: string) {
        return this.code;
    }
}
