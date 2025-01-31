import connect, { disconnect } from "@/database/Connection";
import { Course } from "@/database/models/Course.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(Request: NextRequest) {
    try {
        await connect()
        const populate = Request.nextUrl.searchParams.get('populate');
        const slug = Request.nextUrl.searchParams.get('slug');
        if (slug) {
            if (populate && populate === 'true') {
                const data = await Course.findOne({ slug }).populate(
                    {
                        path: "weekData",
                        match: { referedTo: slug }
                    }
                ).exec();
                return NextResponse.json({ success: true, data, message: 'Course fetched successfully' }, { status: 200 });
            }
        }

        if (populate && populate === 'true') {
            const data = await Course.find({}).populate("weekData").exec();
            return NextResponse.json({ success: true, data, message: 'Courses fetched successfully', length: data.length }, { status: 200 });
        }
        const data = await Course.find({})
        return NextResponse.json({ success: true, data, message: 'Courses fetched successfully', length: data.length }, { status: 200 });

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
        const response = await Course.create(data);
        return NextResponse.json({ success: true, response, message: 'Course created successfully' }, { status: 201 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
    finally {
        await disconnect();
    }
}