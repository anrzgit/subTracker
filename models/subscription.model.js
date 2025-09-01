import mongoose from "mongoose";


const subscriptionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    price : {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: 0
    },
    currency: {
        type: String,
        required: [true, 'Currency is required'],
        enum: ['USD', 'EUR', 'GBP', 'INR'],
        default: 'INR'
    },
    frequency: {
        type: String,
        required: [true, 'Frequency is required'],
        enum: ['monthly', 'yearly', 'weekly'],
        default: 'monthly'
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['basic', 'standard', 'premium','entertainment'],
        default: 'basic'
    },
    paymentMethod : {
        type: String,
        required: [true, 'Payment method is required'],
        trim: true
    }, 
    status : {
        type: String,
        required: [true, 'Status is required'],
        enum: ['active', 'paused', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required'],
        validate : {
            validator: function(value) {
                return value < this.renewalDate;
            },
            message: 'Start date must be before end date'
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.startDate;
            },
            message: 'Renewal date must be after start date'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required'],
        index: true,
    }

}, { timestamps: true })

subscriptionSchema.pre('validate', function(next) {
    if (!this.renewalDate && this.startDate && this.frequency) {
        const renewalPeriod = {
            monthly: 30,
            yearly: 365,
            weekly: 7,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
    }

    // Now validate cross-field logic after setting renewalDate
    if (this.startDate && this.renewalDate && this.startDate >= this.renewalDate) {
        return next(new Error('Start date must be before renewal date'));
    }
    next();
});


const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;