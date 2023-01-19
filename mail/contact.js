var btn = document.getElementById('send');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('message').value;
    if (name=="" || email=="" || subject=="" || text==""){
       
        document.getElementById("err1").innerHTML ='Please enter details';
        document.getElementById('err2').innerHTML="" ;
    }
    else{
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzKg8JdI6L10hXLnz-gWPCdoN__LRH3gLp5lB1Db9Z5AX4Z3cnJ_5K0nwHir7YmFlL7Ag/exec'
        const form = document.forms['formsub']
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(document.getElementById("err2").innerHTML ='success, i will contact you!');
        document.getElementById('formsub').reset();
        document.getElementById('err1').innerHTML="";
    }
})


