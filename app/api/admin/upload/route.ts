import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const password = formData.get("password");
    const slot = formData.get("slot");
    const file = formData.get("file") as File | null;

    if (password !== process.env.ADMIN_UPLOAD_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!file || !slot) {
      return NextResponse.json(
        { error: "Missing file or slot" },
        { status: 400 }
      );
    }

    const allowedSlots = [
      "lifestyle-1",
      "lifestyle-2",
      "lifestyle-3",
      "lifestyle-4",
    ];

    if (!allowedSlots.includes(String(slot))) {
      return NextResponse.json({ error: "Invalid slot" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "lifestyle"
    );

    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, `${slot}.webp`);

    await sharp(buffer)
      .rotate()
      .resize({
        width: 1200,
        height: 1500,
        fit: "cover",
        position: "center",
      })
      .webp({
        quality: 92,
        effort: 6,
      })
      .toFile(filePath);

    return NextResponse.json({
      success: true,
      image: `/uploads/lifestyle/${slot}.webp`,
    });
  } catch (error) {
    console.error("Upload error:", error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}