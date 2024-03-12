import { NextResponse } from "next/server";
import { user } from "../../../../../utils/db";

export function GET(request, { params }){
    const userData = user.filter((user) => user.id === Number(params.userId));

    const response = userData.length > 0 ? { result: userData, success: true } : { result: "Not found!", success: false }

    return NextResponse.json(response, { status: 200 });
}

export async function PUT(request, content) {
    const payload = await request.json();
    payload.id = content.params.userId;

    if (!payload.id || !payload.name || !payload.email || !payload.age) {
        return NextResponse.json({ message: "Request fields are not valid", result: false }, { status: 403 });
    }
    return NextResponse.json({ ...payload, result: true }, { status: 200 });
}