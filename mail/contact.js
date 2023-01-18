
var btn = document.getElementById('send');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('message').value;
    var body = 'Name : ' + name + '<br/>Email : ' + email + '<br/> Subject : ' + subject + '<br/> Message :' + text;
    if (name=="" || email=="" || subject=="" || text==""){
       
        document.getElementById("err1").innerHTML ='Please enter details';
        document.getElementById('err2').innerHTML="" ;
    }
    else{
    Email.send({
        SecureToken : "dfeefa81-12c0-4b00-b730-55e35fdc5e0a",
        To: 'arungkm@gmail.com',
        From: 'verifyhostuser@gmail.com',
        Subject: 'A message from user',
        Body: body
    }).then(document.getElementById("err2").innerHTML ='success, i will contact you!');
    document.getElementById('formsub').reset();
    document.getElementById('err1').innerHTML="";
}
})


