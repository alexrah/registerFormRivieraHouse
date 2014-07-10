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
    
var json = (function(){
var json = null;
$.ajax({
  'url': "surname-condos_list_rivierahouse.json",
  'async': false,
  // 'dataType': "json",
  // 'global': "false",
  'success': function(data){ json = { lista : data }; }
});
return json;
})();

// console.log( json);
// console.log( json.lista.length);

// console.log( json.lista[1].surname );
   

var matchCondo = function(json){ 
var matchC = [];
  for(i=0; i< json.lista.length; i++){
    if(json.lista[i].surname == value){
      // console.log(json.lista[i].surname);
      // console.log(json.lista[i].condos);
      matchC.push(json.lista[i].condos);
    }
  }
// console.log(matchC);
  return matchC;
  };

var trial = matchCondo(json);
console.log(trial);

 

if (trial.length > 0 ) {
    $('#listaCondo').html("");
  for (i=0; i< trial.length; i++){
    $('#listaCondo').append('<option value=""></option>');
    $('#listaCondo option').eq(i).attr("value", trial[i]  );
    $('#listaCondo option').eq(i).text( trial[i]  );
  }
  return true; } else { return false; }

  });

});
