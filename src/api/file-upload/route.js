import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(request) {
    try {
        const payload = await request.formData();
        const file = payload.get('file');
        if (!file) {
            return NextResponse.json({ "message": "Image not found", result: false });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);

        const path = `./public/${file.name}`;
        await writeFile(path, buffer);
        return NextResponse.json({ "message": "File uploaded", result: true });
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong", result: false });
    }
}