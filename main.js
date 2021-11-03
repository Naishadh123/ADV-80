var student_array=[];

function submit()
{
var display_student_array=[];
for(var j=1;j<=4;j++)
{
var name=document.getElementById("name_of_the_student_"+j).value;
console.log(name);
student_array.push(name);
}
console.log(student_array);
var student_lenght=student_array.length;
console.log(student_lenght);
for(var k=0;k<student_lenght;k++)
{
display_student_array.push("<h4>NAME-"+student_array[k]+"</h4>");
console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById(display_name_without_commas).innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline_block";
}

function sorting()
{
student_array.sort();
console.log(student_array);
var display_sorting=[];
var lenght_of_student_array=student_array.length;
console.log(lenght_of_student_array);
for(var k=0;k<lenght_of_student_array;k++)
{
display_sorting.push("<h4>NAME-"+student_array[k]+"</h4>");
console.log(display_student_array);
}
var remove_c=display_sorting.join(" ");
console.log(remove_c);
document.getElementById("display_name_without_commas").innerHTML=remove_c;
}