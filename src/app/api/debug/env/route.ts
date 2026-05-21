import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,

    hasDatabaseUrl: Boolean(
      process.env.DATABASE_URL || process.env.POSTGRES_URL
    ),

    hasBetterAuthSecret: Boolean(process.env.BETTER_AUTH_SECRET),
    betterAuthSecretLength: process.env.BETTER_AUTH_SECRET?.length ?? 0,

    betterAuthUrl: process.env.BETTER_AUTH_URL || null,
    nextPublicAppUrl: process.env.NEXT_PUBLIC_APP_URL || null,

    hasGoogleClientId: Boolean(process.env.GOOGLE_CLIENT_ID),
    googleClientIdPreview: process.env.GOOGLE_CLIENT_ID
      ? `${process.env.GOOGLE_CLIENT_ID.slice(0, 12)}...`
      : null,

    hasGoogleClientSecret: Boolean(process.env.GOOGLE_CLIENT_SECRET),
  })
}