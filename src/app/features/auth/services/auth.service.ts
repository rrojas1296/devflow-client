import { inject, Injectable, signal } from '@angular/core';
import { RegisterSchema } from '../schemas/register.schema';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  user = signal({});
  // TODO: Fix angular version

  async registerUser(data: RegisterSchema): Promise<any> {
    return firstValueFrom(this.http.get('https://jsonplaceholder.typicode.com/todos/1'));
  }
}
