function getdata(){
    let isvalid = true;
    let stud_id = document.clgfrm.stud_id.value;//User_name
    let idpasswd = document.clgfrm.idpasswd.value;//Password
    let Name = document.clgfrm.Name.value;//Name
    let Address = document.clgfrm.address.value;//Address
    let Country = document.clgfrm.country.value;//Country
    let zip = document.clgfrm.zip_code.value;//ZIP
    let email = document.clgfrm.email.value;//email
    let msex = document.getElementById("msex");//Male sex
    let fsex = document.getElementById("fsex");//Female sex
    let checkbox = document.getElementsByName("lang[]");//Checkbox
    let about = document.clgfrm.about.value;//about
    let counter = 0;
    //Name 
    if(Name.length == 0)
    {
        document.getElementById("idname").textContent = "Enter Name"
        isvalid = false
    }
    else{
        document.getElementById("idname").textContent = ""       
    }
    
    //Stud_id
    if(stud_id.length == 0)
    {
        document.getElementById("idstud_id").textContent = "Enter ID"
        isvalid = false
    }
    else{
        document.getElementById("idstud_id").textContent = ""       
    }

    //idpasswd
    if(idpasswd.length == 0)
    {
        document.getElementById("idpasswd").textContent = "Enter Password"
        isvalid = false
    }
    else{
        document.getElementById("idpasswd").textContent = ""       
    }

    //checkbox
    checkbox.forEach((element) => {
        if(element.checked)
        {
            counter++;
            
        }
    });
    
    //ZIP
    if(zip.length == 0)
    {
        document.getElementById("idzip_code").textContent = "Enter ZIP code";
        isvalid = false;
    }
    else{
        document.getElementById("idzip_code").textContent = "";
    }
    //Email
    if(email.length == 0)
    {
        document.getElementById("idemail").textContent = "Enter Email";
        isvalid = false;
    }
    else{
        document.getElementById("idemail").textContent = "";
    }
    //sex
    
    if(msex != null || fsex != null)
    {
    
        document.getElementById("idsex").textContent = "";
        
    }
    else{
        document.getElementById("idsex").textContent = "Select One";
        isvalid = false;
    }
    //country
    console.log(Country);
    if(Country.value == null)
    {
        document.getElementById("idcry").textContent = "Select Country";
        isvalid = false;
    }
    else
    {
        document.getElementById("idcry").textContent = "";
        isvalid = true;
    }
    
    //Language
    if(counter<1)
    {
        document.getElementById("id_check").textContent = "Select atleast 1 sub";
        isvalid = false;
    }
    else{
        document.getElementById("id_check").textContent = "";
    }
    //check all con.
    if(isvalid)
    {
        document.clgfrm.submit();
    }
}