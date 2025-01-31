import mongoose from "mongoose";
import { WeekData } from "./WeekData.model";

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    weekData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: WeekData,
        required: true
    }
}, {
    timestamps: true,
});

// Check if model exists, if not create it
export const Course = mongoose.models.Courses ?? mongoose.model("Courses", CourseSchema);
