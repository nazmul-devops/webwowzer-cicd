import { ObjectId } from 'mongodb';
import { Schema, model, models } from 'mongoose';

const TutorialSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnail_img: {
        type: String,
        // required: true,
        trim: true,
    },
    video_url: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
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

export default models.Tutorial || model('Tutorial', TutorialSchema);
