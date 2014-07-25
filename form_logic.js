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
    
var json0 = (function(){
var json0 = null;
$.ajax({
  // 'url': "surname-condos_list_rivierahouse.json",
  'url': "condos.csv",
  'async': false,
  // 'dataType': "json",
  // 'global': "false",
  // 'success': function(data){ json = { lista : data }; }
  'success': function(data){ json0 =  data ; }
});
return json0;
})();

var json = { lista : $.csv.toObjects(json0) };

// console.log( json);
// console.log( json.lista.length);

// console.log( json.lista[1].surname );
   

console.log(value.charAt(0).toUpperCase());

if (value.charAt(0) != value.charAt(0).toUpperCase()){
  value = value.charAt(0).toUpperCase() + value.slice(1);
}


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
  return true; } else {
    $('#listaCondo option').eq(0).text( "Inserire il proprio cognome.");
    return false;
  }

  });

});
