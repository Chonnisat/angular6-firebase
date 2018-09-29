import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  makeFileRequest(url: string, fileList: Array<File>): Observable<any> {
    if (fileList.length > 0) {
      const formData: FormData = new FormData();
      for (let i = 0; i < fileList.length; i++) {
        formData.append('attach', fileList[i], fileList[i].name);
      }

      const headers = {
        Accept: 'application/json'
      };

      return this.http.post(url, formData, { headers: headers })
      .pipe(
        map(res => res),
        catchError(err => throwError(err))
      );
    }
  }
}
