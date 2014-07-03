jQuery(document).ready(function($) { 
// Code using $ as usual goes here.
document.formvalidator.setHandler('length11',
     function (value) {
             if (value.length == 11) {
                 return true;
             } else {
                 return false;
             }
     }); 

document.formvalidator.setHandler('surname',
  function (value){
    


  });



});
