    function sooDhawee(){

            var inputElement = document.getElementById("userIn");
            var passInput = document.getElementById("passIn");
           
            var magac = inputElement.value;
             var sirta = passInput.value;
            if(magac === "" || sirta === ""){
                inputElement.classList.add("error");
                passInput.classList.add("error");
                alert("Fadlan gari magacaaga iyo sirtaada!");
            } else {
                inputElement.classList.remove("error");
                passInput.classList.remove("error");
                alert(" soo dhawoow, " + magac + "!");
            }
        }
       function badalmuuqaalka() {
        var passInput = document.getElementById("passIn");
        var icon = document.getElementById("eyeIcon"); 
        
        if (passInput.type === "password") {
            passInput.type = "text";
            icon.textContent = "🙈"; // Daanyeer indhaha xirtay
        } else {
            passInput.type = "password";
            icon.textContent = "👁️"; // Il furan
        }
    }