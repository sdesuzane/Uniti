import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormClassesOptions } from '../models/form-classes-options.model';


export interface ApiStudent {
  id: number;
  name: string;
  registration: number;
  cpf: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Classes {
  id: number;
  schoolYear: number;
  shift: number;
  teaching: number;
  identifier: string;
}

export interface ApiClasses {
  sucess: boolean;
  data: Classes[];
}

export interface ApiStudentsResponse {
  sucess: boolean;
  data: ApiStudent[];
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  public api_path = '';

  constructor(private http: HttpClient) {
    this.api_path = environment.urlBase;
  }

  public getFormClassesOptions(payload?: Record<string, string>): Observable<FormClassesOptions> {
    const params = payload ? new HttpParams({ fromObject: payload }) : undefined;
    return this.http.get<FormClassesOptions>(`${this.api_path}classes-options`, { params });
  }


  public getFormStudents(turmaId: string): Observable<ApiStudentsResponse> {
    return this.http.get<ApiStudentsResponse>(`${this.api_path}classes/${turmaId}/students`);
  }


  public getFormTeacherClasses(userId: string): Observable<ApiClasses> {
    return this.http.get<ApiClasses>(`${this.api_path}classes/${userId}/teachers`);
  }

  public getFormAllClasses(): Observable<ApiClasses> {
    return this.http.get<ApiClasses>(`${this.api_path}all-classes`);
  }
}
