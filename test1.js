// SEARCH BAR

jQuery(function($){


$('#search-trigger').on("click", function(){
    $('#search-input').toggleClass('search-input-open');
    setTimeout(function(){
      $('#search-input').removeClass('search-input-open');
    }, 15000);
});

$(document).on("click", function(e){
    if(!$(e.target).closest('.expand-search').length){
        $('#search-input').removeClass('search-input-open');
    }
});


})

// -----------------------------------------------------------

$(document).ready(function(){
 var changed  = [0,0]
  setInterval(function(){ 
    var randImage  = Math.floor(Math.random() *(20-1) +1 )
    changed[0] = randImage
    changed[1] =randImage+20
    // var randImage2  = Math.floor(Math.random() * (40-21) + 21) 
     $('.panels li').find(`div.${randImage}`).addClass('front-flip')

    $('.panels li').find(`div.${randImage+20}`).addClass('back-flip')
    }, 3000);




setInterval(()=>{

    changed.map((x)=>{
         $('.panels li').find(`div.${x}`).removeClass('front-flip')
         $('.panels li').find(`div.${x+1}`).removeClass('back-flip')

    })
},2500)


//   setTimeout(()=>{
         
//          $('.panels li').find('div.1').removeClass('front-flip')
//          $('.panels li').find('div.11').removeClass('back-flip')
//     },5000)

    

});


// -----------------------------------------------------------

$(document).ready(function(){
    $('.burger-nav div').on('click', function(){
        $('.burger-nav div span.first').toggleClass('line1');
        $('.burger-nav div span.second').toggleClass('line2');
        $('.burger-nav div span.third').toggleClass('line3');
        $('nav ul').toggleClass('open');
    });

});

$(document).ready(function(){
    $('.wrapper3 li a.grab').on('click', function(){
        $('.minor-filter a div').toggleClass('filter3');
    });
})