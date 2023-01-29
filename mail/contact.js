var btn = document.getElementById('send');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('message').value;
    var pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name=="" || email=="" || subject=="" || text==""){
       
        document.getElementById("err1").innerHTML ='Please enter details';
        document.getElementById('err2').innerHTML="" ;
    }
    else if (pattern.test(email)){
        const scriptURL = 'https://script.google.com/macros/s/AKfycbynEaMPuR56qulOojmvHnh2K4VVtuGcloqzQZQL046rkcRnh2ZT1H2tWzXEHtbmwuLz-w/exec'
        const form = document.forms['formsub']
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(document.getElementById("err2").innerHTML ='success, i will contact you!');
        document.getElementById('formsub').reset();
        document.getElementById('err1').innerHTML="";
    }
    else{
        document.getElementById("err1").innerHTML ='Please enter valid email';
        document.getElementById('err2').innerHTML="" ;
    }
})




