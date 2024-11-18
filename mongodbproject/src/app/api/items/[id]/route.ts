import connectMongoDB from "@/app/libs/mongodb";
import Item from "@/app/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

interface params {
    params: { id: string };
}

interface RouteParams {
    params: { id: string };
}

export async function GET(request: NextRequest, { params }: params) {
    const { id } = params;
    await connectMongoDB();
    const item = await Item.findOne({ _id: id });
    return NextResponse.json({ item }, {status: 200});
    }

    // Delete item by id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID" }, {status: 400});
    }
    await connectMongoDB();
    const deleteItem = await Item.findByIdAndDelete(id);

    if (!deleteItem) {
        return NextResponse.json({ message: "Item not found" }, {status: 404});
    }
    return NextResponse.json({ message: "Item deleted successfully" }, {status: 200});
}

// Update item by id
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id } = params;
    const {title: title, description: description, image: image } = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(id, { title, description, image });
    return NextResponse.json({ message: "Item updated successfully" }, {status: 200});
}

