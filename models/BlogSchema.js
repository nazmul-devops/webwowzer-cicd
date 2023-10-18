import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
    },
    authorName: {
        type: String,
        required: true,
    },
    estimatedReadingTime: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
