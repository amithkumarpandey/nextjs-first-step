import { mongodbConnectionString } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
    let result;
    let message;
    let productData;
    try {
        await mongoose.connect(mongodbConnectionString);

        productData = await Product.find();
        result = true;
        message = "Product Data got successfully";
    } catch (error) {
        result = false;
        message = "Something went wrong";
    }

    return NextResponse.json({ result, message, data: productData });

}

export async function POST(request) {
    try {
        const payload = await request.json();
        await mongoose.connect(mongodbConnectionString);
        let product = new Product(payload);
        const data = await product.save();
        return NextResponse.json({ result: true, data, message: "Product Added successfully" });
    } catch (error) {
        return NextResponse.json({ result: false, message: "Error while adding product" });
    }
}