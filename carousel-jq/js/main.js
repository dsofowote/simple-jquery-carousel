// var config = function () {
//     var itemCount = 5;
//     var itemDisplayed = 1;
//     var overflowWidth = 0;

//     //makes items/ creates size
//     for (var i = 0; i < itemCount; i++) {
//         var test = "<div class='car-item " + i + "'></div>";
//         var itemWidth = $(".car-item").width();
//         $(".car-overflow").append(test);
//         overflowWidth += itemWidth;
//         console.log("for fired", itemWidth, test, overflowWidth);
//     }

//     //hide other items, display current

//     setInterval(function () {
//         for (var i = 0; i < itemCount; i++) {
//             var currentItem = $(".car-item:nth-of-type(" + i + ")");
//             console.log(currentItem);
//             $(currentItem).addClass("active");
//         }
//     }, 1000);


//     //timed function for this
// }
var nth = 0;

function timedCarousel() {
    //Grab the number of total carousel items
    var itemCount = $(".car-item").length;
    itemCount = itemCount - 1;
    console.log(itemCount);

    setInterval(function () {
        var clearAll = $(".car-item").removeClass("presentItem");
        if (nth < itemCount) {
            nth++;
        } else {
            nth = 0;
        }
        //Get current shown item id and number, then parse this
        var currentItem = $(".car-item:eq(" + nth + ")");
        currentItem.addClass("presentItem");
        console.log(nth);
    }, 3000);

};

timedCarousel();