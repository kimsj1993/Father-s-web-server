const mongoose = require('mongoose');
const { Schema  } = mongoose;

const reviewSchema = new Schema({
    title: String,
    body: String,
    imageUrl: String,
    created: Date,
    updated: Date,
});

mongoose.model('reviews', reviewSchema);