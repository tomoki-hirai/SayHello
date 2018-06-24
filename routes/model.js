const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/SayHelloDB');

const Volume = new Schema({
    user: String,
    volume: Number,
    year: { type: Number, required: true, default: new Date().getFullYear() },
    month: { type: Number, required: true, default: new Date().getMonth()+1 },
    date: { type: Number, required: true, default: new Date().getDate() }
});

// スキーマからモデルをコンパイルし、モデルをエクスポートする
exports.Volume = mongoose.model('volume', Volume);