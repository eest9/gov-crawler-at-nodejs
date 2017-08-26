/**
 * Created by christoph on 26.08.17.
 *
 * Crawler File to handle raw requests
 */

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

exports.council_of_ministers = function (err, response, body) {
    let self = this;
    self.items = new Array();

    //Just a basic error check
    if (err && response.statusCode !== 200) {
        console.log('Request error.');
    }

    const dom = new JSDOM(body);
    const document = dom.window.document;
    const $ = require('jquery')(dom.window);

    const list = $('main.main .overview').children();
    console.log(list);

    list.each(function(element){
            self.items.push(list[element].firstElementChild.getAttribute('href'));
    });
    return self.items;

};

