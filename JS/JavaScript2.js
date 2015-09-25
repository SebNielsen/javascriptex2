var allStudents =[];

$(document).ready(function(){
    $('#button').on('click',function(e){
        e.preventDefault();

        //var id = $('#Id').val();
        //var name = $('#Name').val();
        //var classroom = $('Classroom').val();
        //
        //var student = createStudent(id,name,classroom);
        //adminStud(student, registerItem());

        tester();
    });
});

var student = {
    id : 2032,
    name : "Sebastian Nielsen",
    classroom : 262
};

var createStudent = function(id, name, classroom){
    var student = {
        id : id,
        name : name,
        classroom : classroom
    };
    return student;
};

function logItem(student){
    console.log(student);
}

function registerItem(Student){
    allStudents.push(Student);
}

function adminStud(student, callback) {
    callback(student);
}

function tester(){
    adminStud(student, registerItem());
    for(var i = 0; i < allStudents.length; i++){
        var stud = allStudents[i];
        console.log(stud.id);
    }
}