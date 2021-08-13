console.log("Hello")
function appendcard(){
    // var cust_name = document.getElementById('cust_name');
    var cust_name = document.getElementById('cust_name').value;
    var course = document.getElementById('course').value;
    var author = document.getElementById('author').value;
console.log(cust_name);
console.log(course);
console.log(author);
var unlist = document.getElementById('ullist');
var card = `
<li class="child">
<div class="card_base">
    <div class="img">
    </div>
    <div class="content">
        <div class="content-subhead">Name: <span>${cust_name}</span> </div>
        <div class="content-subhead">Course: <span id="course_name">${course}</span> </div>
        <div class="content-subhead">Auther: <span id="author_name">${author}</span> </div>
    </div>
</div>
</li>
`
unlist.innerHTML+=card;

}
