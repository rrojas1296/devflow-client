import { inject, Injectable } from '@angular/core';
import { RegisterSchema } from '../schemas/register.schema';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@/app/shared/types/ApiResponse';
import { firstValueFrom } from 'rxjs';

interface Response extends ApiResponse {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  registerUser(data: RegisterSchema) {
    return firstValueFrom(this.http.post<Response>('/api/auth/register', data));
  }
}
