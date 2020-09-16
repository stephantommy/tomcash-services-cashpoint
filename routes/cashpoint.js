const express = require("express");
const router = express.Router();

const Cashpoint = require('../model/Cashpoint');

router.get('/', (req, res) => {
    console.log('getting cashpoint list...');
    Cashpoint.find()
        .sort({ cashpID: 1 })
        .then(cashpoints => {
            console.log('Cashpoint list : ', {cashpointList : cashpoints});
            res.json({cashpointList : cashpoints});
        });
});

router.post('/addCashpoint', (req, res) => {
    console.log('adding new cashpoint...');
    console.log('new Cashpoint', req.body);
    const newCashpoint = new Cashpoint(req.body);

    newCashpoint.save();
    Cashpoint.find()
        .sort({ cashpID: 1 })
        .then(cashpoints => {
            console.log('Cashpoint list : ', {cashpointList : cashpoints});
            res.json({cashpointList : cashpoints});
        });
});

router.post('/deleteAllCashpoint', (req, res) => {
    console.log('deleting all cashpoint...');
    Cashpoint.remove({}, () => res.json({status: 'success'}));
});

module.exports = router;