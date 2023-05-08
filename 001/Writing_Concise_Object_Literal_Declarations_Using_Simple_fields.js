function test(value){
    var result = "";
  switch(value){
    case 1 : 
       result = "WELCOME, to CANADA IMMIGARTION SERVICE";
      break;
    case 2 :
       result = "HELLO IMMIGRANT, how are you?";
      break;
    case 3 :
        result = "Which of our Province would you love to stay?? or the Islands!";
  
       break;   
    
       default :
            result ="EXPLORE OUR GREAT COUNTRY, you would love it been here";
            break;
}
        return result;
}
test(1);
