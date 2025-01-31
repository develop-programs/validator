import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['article', 'link', 'book', 'course']
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
}, { _id: true });

const CourseInfo = new mongoose.Schema({
    weekNumber: {
        type: Number,
        required: true
    },
    topics: {
        type: [String],
        required: true
    },
    assignments: {
        type: [String],
        required: true
    }
})

const WeekDataSchema = new mongoose.Schema({
    referedTo: {
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: [CourseInfo],
        required: true,
        trim: true
    },
    resources: {
        type: [ResourceSchema],
        required: true
    }
}, {
    timestamps: true,
});

export const WeekData = mongoose.models.WeekData ?? mongoose.model("WeekData", WeekDataSchema);
