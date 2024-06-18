import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { getSession, login, logout } from "@/auth.ts";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, password } = await request.json();
  await login({ name, password });
  return NextResponse.json({ status: 200 });
}
