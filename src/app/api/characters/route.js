import connectMongoDB from "@/libs/mongodb";
import Character from "@/models/character";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  await connectMongoDB();
  const characters = await Character.find({ userID: id });
  return NextResponse.json({ characters }, { status: 200 });
}
