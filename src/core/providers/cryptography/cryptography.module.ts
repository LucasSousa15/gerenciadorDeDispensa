import { Module } from '@nestjs/common';
import { BcryptProvider } from './implementations/bcrypt.provider';
import { HashProvider } from './models/hashing.service';

@Module({
  providers: [
    {
      provide: HashProvider,
      useClass: BcryptProvider,
    },
  ],
  exports: [HashProvider],
})
export class CryptographyModule {}
