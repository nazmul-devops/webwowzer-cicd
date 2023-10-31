import { Schema, model, models } from 'mongoose';

const TemplateSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        required: true,
        trim: true,
    },

    image: {
        type: String,
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

export default models.TemplateSchema || model('Template', TemplateSchema);
