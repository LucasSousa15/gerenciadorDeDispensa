import * as dotenv from "dotenv";
import { existsSync } from "fs";
import z from "zod";
import { fromZodError } from 'zod-validation-error'

if (existsSync('.env')) {
  dotenv.config();
  console.log('✅ Arquivo .env encontrado e carregado.');
} else {
  console.log('ℹ️ Arquivo .env não encontrado, utilizando variáveis de sistema.');
}

const envSchema = z.object({
    DATABASE_URL: z.string().nonempty("DATABASE_URL é obrigatória"),
    PORT: z.string().default("3000"),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  const validationError = fromZodError(_env.error);
  console.error('❌ Variáveis de ambiente inválidas:', validationError.message);
  process.exit(1);
}

export const env = _env.data;

Object.entries(env).forEach(([key, value]) => {
  process.env[key] = String(value);
});

console.log('✅ Variáveis de ambiente carregadas e process.env sincronizado');



