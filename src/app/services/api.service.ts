import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    get<T>(url: any): Observable<T> {
        return this.http.get<T>(url, this.httpOptions);
    }

    post<T>(url: any, body: any) {
        return this.http.post<T>(url, JSON.stringify(body), this.httpOptions);
    }

    put<T>(url: any, body: any): Observable<T> {
        return this.http.put<T>(url, JSON.stringify(body), this.httpOptions);
    }

    delete<T>(url: any): Observable<T> {
        return this.http.delete<T>(url, this.httpOptions);
    }

    download<T>(url: any, body: any) {
        let httpOptions: any = {
            responseType: 'blob',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post<T>(url, JSON.stringify(body), httpOptions);
    }

    read(url: any) {
        let httpOptions: any = {
            responseType: 'text'
        };
        return this.http.get(url, httpOptions);
    }

    // Error handling
    handleError(err: any) {
        console.log("error", err);
        let error = { status: 0, message: "", code: null };
        if (err.error.ErrorCode) {
            // Get client-side error
            error.status = err.status;
            error.code = err.error.ErrorCode;
            error.message = err.error.Message;
        } else {
            // Get server-side error
            error.status = err.status;
            switch (err.status) {
                case 400:
                    error.message = `${err.status} : Bad Request.`;
                    break;
                case 401:
                    error.message = `${err.status} : You are unauthorized to do this action.`;
                    break;
                case 403:
                    error.message = `${err.status} : You don't have permission to access the requested resource.`;
                    break;
                case 404:
                    error.message = `${err.status} : The requested resource dose not exist.`;
                    break;
                case 405:
                    error.message = `${err.status} : Method Not Allowed.`;
                    break;
                case 412:
                    error.message = `${err.status} : Precondition Failed.`;
                    break;
                case 500:
                    error.message = `${err.status} : Internal Server Error.`;
                    break;
                case 503:
                    error.message = `${err.status} : The requested service is not available.`;
                    break;
                default:
                    error.message = `Something went wrong!`;
                    break;
            }
        }
        return error;
    }
}