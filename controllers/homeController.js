exports.index = (req, res) => {
    var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key903lXTX5XKYUmn'}).base('appEcOUCQGus5U66Q');

base('Design projects').select({
    // Selecting the first 3 records in All projects:
    maxRecords: 16,
    view: "All projects"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
    res.sendfile('public/home.html');

}; 
