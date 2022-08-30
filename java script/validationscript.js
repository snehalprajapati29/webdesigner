
      function check(){
        //first name validation
    let fname=document.form1.fname.value
        if(fname=="" || fname==null){
           document.getElementById("p1").innerHTML="Please Enter your first name"
            document.form1.fname.focus()
            return false
        }
     //second name validation
        let sname=document.form1.sname.value
        if(sname=="" || sname==null){
            document.getElementById("p2").innerHTML="Please Enter your Second name"
            document.form1.fname.focus()
            return false
        }
     //last name validation
        let lname=document.form1.lname.value
        if(lname=="" || lname==null){
            document.getElementById("p3").innerHTML="Please Enter your Last name"
            document.form1.fname.focus()
            return false
        }
       //gender validation
            let male=document.form1.gen[0].checked;
            let female=document.form1.gen[1].checked;
            if(male==false && female==false){
                document.getElementById("p5").innerHTML=("Please select Gender");
                return false
            }
 //subject validation
            let c1=document.form1.c1.checked
            let c2=document.form1.c2.checked
            let c3=document.form1.c3.checked
            let c4=document.form1.c4.checked
          
            if(c1 == false && c2 == false && c3 == false && c4 == false ) 
            {
                document.getElementById("p6").innerHTML=("Please select Subject");
                return false 
            }
           //password validation  
      var num1=document.form1.password1.value;
        var num2=document.form1.password2.value;
            if(num1==""){
                document.getElementById("p4").innerHTML=("Please enter password");
                document.form1.password1.focus()
                return false
            }
            if(num1!= num2){
                document.getElementById("p4").innerHTML=("password are not");
                document.form1.password2.focus()
                return false
            }
             //city validation
            let city=document.form1.city.value
            if(city== -1){
                document.getElementById("p7").innerHTML=("select city");
                document.form1.city.focus()
                return false
            }
             //Mobile number validation
            let mno=document.form1.mno.value
            if(mno==""){
                document.getElementById("p8").innerHTML=("Enter mobile number");
                document.form1.mno.focus()
                return false
            }
            if(isNaN(mno))
            {
                document.getElementById("p8").innerHTML=("Enter only digits");
                document.form1.mno.focus()
                return false
            }
             //Address name validation
            let area=document.form1.add.value
            if(area.length <=20)
            {
                document.getElementById("p10").innerHTML=("Enter address character more then 20 ");
                document.form1.add.focus()
                return false
            }
             // Email validation
            let mail=document.form1.email.value
            if(mail==""){
                document.getElementById("p9").innerHTML=("Enter Mail Address");
                document.form1.email.focus()
                return false
            }
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
            {
              return (true)
            }
            else{
              alert("You have entered an invalid email address!")
              return (false)
            }
           
}
       
        