function fabricsSize(size){
    if (size < 5){
        return "Small";
    }
    else if (size < 10){
        return "Medium";
    }
    else if (size < 15){
        return " Large";
    }
    else if (size < 20){
        return "Xtra Large";
    }
    else {
        return "Huge";
    }
}
fabricsSize(5); 
