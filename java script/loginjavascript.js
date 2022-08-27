

function validation(){
    let uname=document.form1.uname.value
    
    if(uname == "" || uname==null){
       document.getElementById("msg1").innerHTML="Please enter user name"
       document.form1.uname.focus()
        return false
    }
    else{

        document.form1.pass.focus()
        document.getElementById("msg1").innerHTML=""
    }
    let pass=document.form1.pass.value
      if(pass == ""){
        document.getElementById("msg2").innerHTML="Please enter password"
        document.form1.pass.focus()
         return false
    }
}