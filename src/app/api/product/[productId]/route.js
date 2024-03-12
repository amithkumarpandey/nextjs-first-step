import { NextResponse } from "next/server";
import { mongodbConnectionString } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";

export async function GET(request, content) {
    const productId = content.params.productId;
    let result;
    let message;
    let productData;
    try {
        await mongoose.connect(mongodbConnectionString);

        productData = await Product.findById(productId);
        result = true;
        message = "Product got successfully";
    } catch (error) {
        console.log("error", error);
        result = false;
        message = "Something went wrong";
    }

    return NextResponse.json({ result, message, data: productData });
}

export async function PUT(request, content) {
    const productId = content.params.productId;
    const payload = await request.json();

    let result;
    let message;
    let productData;
    try {
        await mongoose.connect(mongodbConnectionString);

        productData = await Product.findByIdAndUpdate(productId, payload);
        result = true;
        message = "Product Updated successfully";
    } catch (error) {
        result = false;
        message = "Something went wrong";
    }

    return NextResponse.json({ result, message, data: productData });
}

export async function DELETE(request, content) {
    try {
        const productId = content.params.productId;
        const record = { _id: productId }
        await mongoose.connect(mongodbConnectionString);
        let product = await Product.deleteOne(record);
        return NextResponse.json({ result: true, message: "Product Deleted successfully" });
    } catch (error) {
        return NextResponse.json({ result: false, message: "Error while deleting product" });
    }
}