jQuery(document).ready(function(){
    
 "use strict";   
$('#slider-c').carouFredSel({
    responsive: true,
    width: '100%',
    circula: true,
    scroll: {
        items:1,
        duration:500,
        pauseOnHover: true
         },
    
    auto:true,
    
    items:{
        visible: {
            min:1,
            max:1
        }, 
        height: "variable"
    },
    
    pagination:{
        container: ".sliderpager",
        pageAnchorBuilder: false,
    }
    
    
    
})  
  setInterval(function(){
	$("#cats img").attr("src", "http://thecatapi.com/api/images/get?format=src&type=jpg&size=med&" + new Date().getTime());
    console.log('here');
},2000);  
});