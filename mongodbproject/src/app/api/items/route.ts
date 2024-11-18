import connectMongoDB from "@/app/libs/mongodb";
import Item from "@/app/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Get all items
 export async function GET(request: NextRequest) {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({items});
} 

// Create new item
export async function POST(request: NextRequest) {
    const { title, description, image } = await request.json();
    await connectMongoDB();
    await Item.create({ title, description, image });
    return NextResponse.json({ message: "Item created successfully" }, {status: 201});
}

