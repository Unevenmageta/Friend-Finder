$(document).ready(function(){

    var people = [];
    
    
    $("#submit").on("click",function(){
        
        var scores =[];

        for(let i=1;i<10+1;i++){
            // console.log($(`#q${i}`).val());
            var answer = $(`#q${i}`).val();
            scores.push(answer);
        }

        var newPerson = {

             name : $("#name").val(),
             image :$("#photo").val(),
             scores: scores
        }

        people.push(newPerson);

        
        console.log(newPerson);
        
        console.log(people);

        $("#name-here").text(newPerson.name);
        $("#img-here").text("Click here for image");
        $("#img-here").attr("href",newPerson.image);
        $("#score-here").text(newPerson.scores);


    });




    







});