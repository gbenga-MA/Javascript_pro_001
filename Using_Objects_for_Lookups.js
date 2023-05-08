function testCoding(value){
    var result = "";
        let lookup = {
          "Brand": "Lexus",
          
          "Engine": "v8 Twin-Turbo",
          "class": "Sedan",
          "company": "Toyota"
       };
       result = lookup[value];
       return result;
}
testCoding("Brand");
