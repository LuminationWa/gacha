import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, password, characters = [], obtainedCharacters = [], savedTokens = 0, spentTokens = 0, lastTokenDate = new Date() } = await request.json();
  await connectMongoDB();
  await User.create({ name, password, characters, obtainedCharacters, savedTokens, spentTokens, lastTokenDate });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

