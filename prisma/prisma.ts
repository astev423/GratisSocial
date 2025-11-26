// db.ts (or similar)
import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

// Create a single Pool instance (can also be cached on global if you like)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
