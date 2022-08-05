const express = require("express");
const router = express.Router();

const randoms = require("../models/Randoms");

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/randoms/:cant?', randoms.get);

module.exports = router;