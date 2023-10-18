import mongoose from 'mongoose';

const { ObjectId } = require('mongodb');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
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

export default mongoose.models.User || mongoose.model('User', UserSchema);
