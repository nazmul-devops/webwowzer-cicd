import { Schema, model, models } from 'mongoose';

const EmailSubscriptionSchema = new Schema({
    email: {
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

export default models.EmailSubscription || model('EmailSubscription', EmailSubscriptionSchema);
