import { ObjectId } from 'mongodb';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    company_name: {
        type: String,
        required: false,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    region: {
        type: String,
        required: true,
        trim: true,
    },
    postal_code: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone_number: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['client', 'admin'],
        default: 'client',
    },
    joiningDate: {
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

export default models.User || model('User', UserSchema);
