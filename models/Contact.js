import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    company_name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Pending', 'Contacted', 'Resolved'],
        required: true,
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

export default models.Contact || model('Contact', ContactSchema);
