'use strict';

var server = require('server');

server.get('Landing', server.middleware.https, function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');

    res.render('contactUs/contactUs.isml', {
        actionUrl: URLUtils.url('ContactUs-Subscribe').toString()
    });

    next();
});

module.exports = server.exports();