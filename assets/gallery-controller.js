app.controller('GalleryController', function($scope){
   

    $scope.images = [{
        artist: "Unknown",
        title: "Push Factor",
        url:" http://yourpushfactor.com/wp-content/uploads/2014/04/pfcoverphoto.png",
        
    },{
        artist: "Ray Mar",
        title: "Remember",
        url: "http://raymmar.com/wp-content/uploads/2014/08/stop-reading-motivational-articles.jpg",
        
    },{
        artist: "Unknown",
        title: "Collaborate",
        url: "https://assets.entrepreneur.com/slideshow/10-motivational-posters-collaborate.jpg",
        
    },{
        artist: "PositiveThesaurus",
        title: "Limits",
        url: "http://2.bp.blogspot.com/-gzED506eKYw/VjCrUN9Hl6I/AAAAAAAACn4/hem1GQCkOus/s300/herbert-simon-one-finds-limits-motivational-quote-www-positivethesaurus-com-small.jpg",
        
    }];
    
    $scope.addImage = function(){
        if($scope.newImage){
            $scope.images.push($scope.newImage);
            $scope.newImage = '';
        }
    }
    
    $scope.removeImage = function(i){
        $scope.images.splice(i, 1);
    }
    
})