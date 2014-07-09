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
    
// var json = (function(){
// var json = null;
$.ajax({
  'url': "surname-condos_list_rivierahouse.json",
  'async': "false",
  'dataType': "json",
  'global': "false",
  'success': "data"
   
    // console.log(data);
 
    // console.log(json);
  
});
// return json;
// })();

    console.log(data);
for(i=0; i< json.count; i++){
if(json[i].surname == value){
    console.log(json[i].condos);
  }
}

  });


});
