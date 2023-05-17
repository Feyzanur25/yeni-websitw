function showGreeting() {
    var name = document.getElementById("nameInput").value;
    var today = new Date();
    var hour = today.getHours();
    var greeting = "";
  
    if (hour < 12) {
      greeting = "Günaydın";
    } else if (hour < 18) {
      greeting = "İyi günler";
    } else {
      greeting = "İyi akşamlar";
    }
  
    var message = greeting + ", " + name + "! Şu an saat " + hour + ":"
      + padZero(today.getMinutes()) + ":" + padZero(today.getSeconds()) + " ve bugün " + getDayOfWeek(today.getDay()) + ".";
  
    document.getElementById("greeting").innerHTML = message;
  }
  
  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }
  
  function getDayOfWeek(day) {
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    return days[day];
  }





 
 
  
  
  
  

  
  
  
  

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
  
  
  
  
  
  
  