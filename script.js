let Form = document.getElementById("Form");

Form.addEventListener("submit", function(event){
    event.preventDefault()
    cleanResults();

    console.log("Enviando formulario");
        
    return false;
    
});

function cleanResults() {
    document.querySelector("input").innerHTML = ""
}

Form.addEventListener("submit", function{
    cleanResults()
});