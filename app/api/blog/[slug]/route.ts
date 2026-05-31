import { NextResponse } from "next/server";
import { blogContent } from "@/lib/blog-content";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const content = blogContent[params.slug];
  if (!content) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(content);
}
