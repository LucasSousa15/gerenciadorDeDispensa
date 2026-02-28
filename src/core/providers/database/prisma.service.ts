import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "generated/prisma/client";
import { Pool } from "pg";



@Injectable()
export class PrismaService extends PrismaClient implements
  OnModuleInit, OnModuleDestroy {

    constructor() {
        const connectionString = process.env.DATABASE_URL
        const pool = new Pool({
            connectionString,
        })

        const adapter = new PrismaPg(pool)
        super({ adapter, log: ['warn', 'error'] })
    }

    async onModuleInit() {
        await this.$connect()
        console.log("Prisma connected to the database")
    }

    async onModuleDestroy() {
        await this.$disconnect()
        console.log("Prisma disconnected from the database")
    }



}

