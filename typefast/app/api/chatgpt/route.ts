import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { input } = await req.json();
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.responses.create({
    model: "gpt-4.1",
    input,
  });
  return NextResponse.json({ output: response.output_text });
}
