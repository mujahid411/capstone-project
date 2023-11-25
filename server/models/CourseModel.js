import mongoose from 'mongoose';

let courseSchema = new mongoose.Schema({
    courseAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    courseTitle: {
        type: String,
        // required:true
    },
    courseDescription: {
        type: String
    },
    coursePrice: {
        type: String
    },
    courseImage: {
        type: String
    },
    courseChapters: [],
    courseCategory: {
        type: String
    },
    courseQuiz: []
}, { timestamps: true })

const courseModel = mongoose.model('Courses', courseSchema, 'courses');

export default courseModel;