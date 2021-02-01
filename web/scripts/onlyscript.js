
$(document).ready(function(){
    $("#myBtn").click(function(){
        let phrase = $("#myInput").val();
        let status = $("#CB").val() | false;
        $.ajax({
            type: 'POST',
            url: `http://localhost:5000/reverse/palindrome`,
            contentType: "application/json",
            data: JSON.stringify({
                "phrase": `${phrase}`,
                "strict": `${status}`
            }),
            success: onSuccess,
            dataType: 'json',
                    
        });
    });
    
});


function onSuccess(data) {
    console.log(data);
    console.log(data.message);
    
    
}
function changeColor(){
    if (_this.checked) {
        x.style.backgroundColor = 'green'
      } else  {
        x.style.backgroundColor = 'white';
      }
}
