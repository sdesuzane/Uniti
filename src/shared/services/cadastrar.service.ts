import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DefaultStudentPayload } from '../models/default-payload.interface';

export interface createClassPayload {
  year: string;
  shift: string;
  teaching: string;
  identifier: string;
}
export interface createTeacherPayload {
  name: string;
  email: string;
  registration: number;
  schoolClassIds: number[];
}

export interface CreateClassResponse {
  id: string;
}
export interface CreateTeacherResponse {
  id: string;
}

export interface CreateStudentResponse {
  id: string;
}


export interface CreatePdiPayload {
  studentId: number;
  answersAcademicDevelopmentId: number[];
  answersEmotionalInteligenceId: number[];
  answersResponsabilityId: number[];
  considerations: string;
}


export interface CreatePdiSuccessResponse {
  success: boolean;
  data: {
    id: number;
    createdAt: string;
    updatedAt: string;
  };
}


export interface ErrorResponse {
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  public api_path = '';

  constructor(private http: HttpClient) {
    this.api_path = environment.urlBase;
  }

  public createClass(payload?: createClassPayload): Observable<CreateClassResponse> {
    return this.http
      .post<CreateClassResponse>(`${this.api_path}classes`, payload);
  }

  public createStudent(payload?: DefaultStudentPayload): Observable<CreateStudentResponse> {
    return this.http
      .post<CreateStudentResponse>(`${this.api_path}students`, payload);
  }

  public createTeacher(payload?: createTeacherPayload): Observable<CreateTeacherResponse> {
    return this.http
      .post<CreateTeacherResponse>(`${this.api_path}teachers`, payload);
  }

  public createPDI(payload: CreatePdiPayload): Observable<CreatePdiSuccessResponse | ErrorResponse> {
    return this.http.post<CreatePdiSuccessResponse | ErrorResponse>(`${this.api_path}pdi`, payload);
  }

}
