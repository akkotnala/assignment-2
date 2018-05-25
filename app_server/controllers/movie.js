
module.exports.theWorstMovie = function(req, res){
res.render('TheWorstMovie', {
    title: 'your least favourite movie',
    pageHeader: {
            title: 'Worst Movies',
            strapline: 'your least favourite movie'
        }

                            });
};
/* GET 'Location info' page */
module.exports.theBestMovie = function(req, res){
res.render('TheBestMovie', { title: 'your favourite movie',
                            pageHeader: {
            title: 'Best Movies',
            strapline: 'your favourite movie'
        } });
};

