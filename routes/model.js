const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/SayHelloDB');

const Volume = new Schema({
    user: String,
    volume: Number
});

// スキーマからモデルをコンパイルし、モデルをエクスポートする
exports.Volume = mongoose.model('volume', Volume);