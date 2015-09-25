/**
 * Created by sebastiannielsen on 22/09/15.
 */
$(document).ready(function(){
   $('#button').on('click',function(e){

       e.preventDefault();

       var firstname = $('#Firstname').val();
       $('#div1').text(firstname);

       var lastname = $('#Lastname').val();
       $('#div2').text(lastname);

       var phone = $('#Phone').val();
       $('#div3').text(phone);

       var email = $('#Email').val();
       $('#div4').text(email);

       var t = $('#form').serialize();
    console.log(t);
   });

   $('.div').on('click', function(){
       writetext(this, 'hej');
   })

});


var writetext = function(element, text){
        $(element).text(text);
};


