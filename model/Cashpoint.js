const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    cashpType: {
        type: String,
        required: true
    },
    cashpID: {
        type: String,
        required: true
    },
    cashpName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

module.exports = Cashpoint = mongoose.model('cashpoint', ItemSchema);