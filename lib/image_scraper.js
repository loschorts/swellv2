// This can't be run stand-alone because of the environment variables;
// call "be rake images:fetch" instead.

var NUM_PER = 10;
var Cloudinary = require ('cloudinary')
  , Scraper = require ('images-scraper')
  , google = new Scraper.Google();

Cloudinary.config({ 
  cloud_name: process.env.cloudinary_cloud_name, 
  api_key: process.env.cloudinary_api_key, 
  api_secret: process.env.cloudinary_api_secret
});

var spots = process.argv,
    si = 0;

function nextSpot() {
    if (!spots[si]) return;
    while (spots[si][0] === '/') si++;
    return spots[si++];
}

function findImages(spot) {
    if (!spot) return;

    console.log(spot);

    google.list({
        keyword: spot + ' Surf',
        num: NUM_PER,
        detail: true,
        nightmare: {
            show: false
        },
        advanced: {
            resolution: 'l'
        }
    })
    .then(function (res) {
        var count = 0;
        res.forEach(function(r) {
        Cloudinary.v2.uploader.upload(r.url, 
            { folder: "spots/" + spot.replace(" ", "_") },
            function(error, result) { 
                console.log(error || result.url); 
                if (++count === NUM_PER) {
                    findImages(nextSpot());
                }
            });
        })
    }).catch(function(err) {
        console.log('err', err);
    }); 
}

findImages(nextSpot());
