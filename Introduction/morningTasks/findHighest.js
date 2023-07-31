function findTheHighest(value){
let v = value[0]
for(var i =0; i < value.length; i++){
   let vary = parseInt(value[i]) % 10
      if(vary % 2 != 0 && v % 2 != 0 > vary ){console.log(vary)
    }
    if(v % 2 != 0 > vary){
        v = vary
        console.log(v)
    }else{
        console.log("")
    }
    vary = vary / 10
      // console.log(value[i])
    //return(value[i])
    return "";
}

}



console.log(findTheHighest("389"))