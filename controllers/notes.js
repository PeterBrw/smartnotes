const getHomePage = require('../views/home');
const getNotes = require('../views/notes');
const getLogin = require('../views/login');
const getLoginErr = require('../views/login-err');
const getSignup = require('../views/signup');
const getSignupErr = require('../views/signup-err');
const get404 = require('../views/404');

const begin = require('../views/includes/begin').begin();
const between = require('../views/includes/between').between();
const end = require('../views/includes/end').end();
const headerMain = require('../views/includes/header-main').headerMain();
const footer = require('../views/includes/footer').getFooter();
const headerSecond = require('../views/includes/header-second').headerSecond();
const footerSecond = require('../views/includes/footer-second').footerSecond();

exports.getHome = (req, res) => res.send(getHomePage(begin, between, headerMain, footer, end));

exports.getNotes = (req, res) => res.send(getNotes(begin, between, footer, end));

exports.getLogin = (req, res) => res.send(getLogin(begin, between, headerSecond, footerSecond, end));

exports.getLoginErr = (req, res) => res.send(getLoginErr(begin, between, headerSecond, footerSecond, end));

exports.getSignup = (req, res) => res.send(getSignup(begin, between, headerSecond, footerSecond, end));

exports.getSignupErr = (req, res) => res.send(getSignupErr(begin, between, headerSecond, footerSecond, end));

exports.get404 = (req, res) => res.send(get404(begin, between, headerMain, footer, end));
