var compose = function(functions) {
    
    return function(x) {
        let length = functions.length;
        if(length == 0){
            return x;
        }
        else{
            length--;
            while(length >= 0){
                x = functions[length](x);
                length--;
            }
            return x;
        }
    }
};