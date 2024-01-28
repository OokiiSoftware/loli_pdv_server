import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá, estamos iniciando o Loli ERP Fenix usando o NestJS!';
  }
}
