$(".stream-nav").on("click", function() {
    var allStreamsCardsSelector = ".card";
   
    var thisStreamCardsSelector = "." + this.id + "-card";

    $(allStreamsCardsSelector).removeClass("card-highlight");
    $(thisStreamCardsSelector).addClass("card-highlight");
});
