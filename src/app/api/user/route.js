import { NextResponse } from "next/server";
import { user } from "../../../../utils/db";

export async function GET(request) {
    return NextResponse.json(user, { status: 200 });
}

export async function POST(request) {
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
        return NextResponse.json({ message: "Required fields are not found" }, { status: 400 });
    }

    return NextResponse.json({ message: "New user added successfully" }, { status: 201 });

}