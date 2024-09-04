import { login } from "@/libs/auth.ts";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, password } = await request.json();
  await login({ name, password });
  return NextResponse.json({ status: 200 });
}
