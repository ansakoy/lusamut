$(function(){
    $.ajax({
        type: 'GET',
        url: 'http://www.myapifilms.com/imdb/idIMDB?title=harry+potter&token=5eaca6d0-ddea-4f5c-98fb-968e1d205b4f&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=1&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0&goofs=0&quotes=0',
        success: function(data){
            console.log('success', data);
        }
    });
});