import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, password, characters = [], obtainedCharacters = [], savedTokens = 0, spentTokens = 0, sinceLastToken = 0 } = await request.json();
  await connectMongoDB();
  await User.create({ name, password, characters, obtainedCharacters, savedTokens, spentTokens, sinceLastToken });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

