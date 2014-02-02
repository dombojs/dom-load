
var xhr = require('xhr');

module.exports = load;

/**
 * load URL content into a DOM element
 *
 * @return {List} self
 * @api public
 */

function load(url, selector) {

    var self = this;

    xhr(url, function(req) {
        var html = req.responseText.replace(/[\S\s]*<body.*?>|<\/body[\S\s]*/g, '');
        self.html( selector ? self.dom('<div>'+html+'</div>').find(selector).html() : html );
    }, function(err) {
        throw err;
    });

    return this;

}
