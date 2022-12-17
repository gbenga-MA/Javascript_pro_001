 function testCoding(value){
    let result = "";
    switch(value){
        case 1:
            result = "The Golden teal Mink Jacket goes for $800";
            break;
        case 2:
            result = "Cool, will you go for a denim Jacket for $400?";
            break;
        case 3:
            result = "Oops, you can go for other jackets but not MINK & DENIM";
            break;    

        default:
            result = "Since you can't find your choice here, check other Collections";
            break;
                        
    }
    return result;
 }
 testCoding(1);
