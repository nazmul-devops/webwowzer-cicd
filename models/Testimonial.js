import { Schema, model, models } from 'mongoose';

const TestimonialSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    client_image: {
        type: String,
    },
    client_name: {
        type: String,
        required: true,
        trim: true,
    },
    client_designation: {
        type: String,
        required: true,
        trim: true,
    },
    created_at: {
        type: Date,
        default: new Date().toJSON(),
    },

    active: {
        type: Boolean,
        default: true,
    },
});

export default models.TestimonialSchema || model('Testimonial', TestimonialSchema);
