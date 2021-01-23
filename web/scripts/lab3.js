function performProblemFour(){
   
    var list = document.getElementsByTagName('p');
                  for( var i = 0; i < list.length; i++){
                        list[i].style.color = "#fff200";
                       
                      
                  }
                  for( var i = 0; i < list.length; i++){
                    list[i].style.background = "black";
                   
                  
                 }
                  if(document.querySelector('#b4').innerText == "Perform Problem 4"){
                    document.querySelector('#b4').innerText = "performProblemFour";            
                   
                }else{
                    document.querySelector('#b4').innerText = "Perform Problem 4"; 
                    for( var i = 0; i < list.length; i++){
                        list[i].style.color = "black";
                        
                      
                    }
                    for( var i = 0; i < list.length; i++){
                        list[i].style.background = "white";
                       
                      
                     }
                    
                }
                             
}  
function performProblemFive(){
    
    var imgArray = ["images/cards/2S.jpg",
    "images/cards/3S.jpg","images/cards/4S.jpg","images/cards/5S.jpg","images/cards/6S.jpg"
    ,"images/cards/7S.jpg","images/cards/8S.jpg","images/cards/9S.jpg","images/cards/10S.jpg","images/cards/AS.jpg"];
    
    for(var i = 0; i < imgArray.length; i++){
        var image = document.createElement('img');
        image.style.height = '70px';
        image.style.width = '50px';
        image.src = imgArray[i];
       var src = document.getElementById("p5");
       src.appendChild(image);
    }
    if(document.querySelector('#b5').innerText == "Perform Problem 5"){
        document.querySelector('#b5').innerText = "performProblemFive";            
       
    }else{
        document.querySelector('#b5').innerText = "Perform Problem 5";
       
    }
       
       
      

        /*
        var image = document.createElement('img');
        image.src = "images/cards/AS.jpg";
        var src = document.getElementById("p5");
        src.append(image);
        */
    
}          
     