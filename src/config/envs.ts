import 'dotenv/config';
import * as joi from 'joi';

interface IEnvs {
  DATABASE_URL: string;
  NATS_SERVERS: string[];
  PORT: number;
}

const schema = joi
  .object({
    DATABASE_URL: joi.string().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
    PORT: joi.number().default(3000),
  })
  .unknown();

const { error, value } = schema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) throw new Error(error.message);

const envs: IEnvs = value;

export { envs };
