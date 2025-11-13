import { NextRequest, NextResponse } from 'next/server';
import { buildExtensionConfig } from '@/lib/ext/config';

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const config = buildExtensionConfig({ origin });

  return NextResponse.json(config, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  });
}
