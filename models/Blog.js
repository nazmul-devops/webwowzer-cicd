import { ObjectId } from 'mongodb';
import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    blog_cover_img: {
        type: String,
    },
    author_name: {
        type: String,
        required: true,
        trim: true,
    },
    read_time: {
        type: Number,
        required: true,
    },
    blog_content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date().toJSON(),
    },
    created_by: {
        type: ObjectId,
        required: false,
    },
    update_date: {
        type: Date,
        required: false,
    },
    updated_by: {
        type: ObjectId,
        required: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

export default models.Blog || model('Blog', BlogSchema);
