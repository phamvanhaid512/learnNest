import { Module } from '@nestjs/common';
import { CastModule  } from './cats/cats.module';
@Module({
  imports: [CastModule ]
})
export class AppModule {}