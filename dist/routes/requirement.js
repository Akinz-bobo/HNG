"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = __importDefault(require("../data/data"));
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    // get the query params
    const { slack_name, track } = req.query;
    // check if query parameters exist in data;
    if (data_1.default['slack_name'] === slack_name && data_1.default['track'] === track) {
        res.status(200).json({ ...data_1.default, status_code: 200 });
    }
    else {
        res.status(404).json({
            message: `could not find user with that parameters, consider using ${data_1.default['slack_name']} & ${data_1.default['track']}`
        });
    }
});
exports.default = router;
