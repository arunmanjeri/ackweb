
var btn = document.getElementById('send');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('message').value;
    var body = 'User Name : ' + name + '<br/>User Email : ' + email + '<br/> Subject :' + subject + '<br/> Message :' + text;
    if (name=="" || email=="" || subject=="" || text==""){
       
        document.getElementById("err1").innerHTML ='Please enter details';
        document.getElementById('err2').innerHTML="" ;
    }
    else{
    Email.send({
        Host: "smtp.elasticemail.com",
        port: '2525',
        Username: "personal@email.com",
        Password: "A14FB52CB07DE553C2E8933805148AF35540",
        To: 'arungkm@gmail.com',
        From: 'verifyhostuser@gmail.com',
        Subject: 'A message from user',
        Body: body
    }).then(document.getElementById("err2").innerHTML ='success, i will contact you!');
    document.getElementById('formsub').reset();
    document.getElementById('err1').innerHTML="";
}
})


