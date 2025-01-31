import connect, { disconnect } from "@/database/Connection";
import { Course } from "@/database/models/Course.model";
import { WeekData } from "@/database/models/WeekData.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connect()

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
    finally {
        await disconnect();
    }
}


export async function POST(Request: NextRequest) {
    const data = await Request.json();
    try {
        await connect()
        const weeklyData = await WeekData.create(data);
        if (!weeklyData) {
            return NextResponse.json({ success: false, error: 'Failed to create week data' }, { status: 400 });
        }
        const findCourse = await Course.findOne({ slug: data.referedTo });
        if (!findCourse) {
            return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404 });
        }
        const id = new mongoose.Types.ObjectId(weeklyData._id);
        const response = await findCourse.updateOne({ weekData: id });
        return NextResponse.json({ success: true, data: WeekData, referesTo: response, message: 'Week data created successfully' }, { status: 201 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
    finally {
        await disconnect();
    }
}