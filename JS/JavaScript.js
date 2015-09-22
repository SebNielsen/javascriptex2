/**
 * Created by sebastiannielsen on 22/09/15.
 */
$(document).ready(function(){
   $('#button').on('click',function(e){

       e.preventDefault();
/*
       var firstname = document.getElementsByName("Firstname");
       var lastname = document.getElementsByName("Lastname");
       var phone = document.getElementsByName("Phone");
       var email = document.getElementsByName("Email");

       var firstnameP = document.createElement("p");
       var lastnameP = document.createElement("p");
       var phoneP = document.createElement("p");
       var emailP = document.createElement("p");

       firstnameP.appendChild(firstname);
       lastnameP.appendChild(lastname);
       phoneP.appendChild(phone);
       emailP.appendChild(email);

       document.getElementById("div1").appendChild(firstnameP);
       document.getElementById("div2").appendChild(lastnameP);
       document.getElementById("div3").appendChild(phoneP);
       document.getElementById("div1").appendChild(emailP);
*/
       var firstname = $('#Firstname').val();
       $('#div1').text(firstname);

       var lastname = $('#Lastname').val();
       $()

       var t = $('#form').serialize();
    console.log(t);
   });
});

