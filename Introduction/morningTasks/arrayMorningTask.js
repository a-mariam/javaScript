
    let indices = [4, 5, 6, 7, 0, 2, 1, 3]
    let s = "codeleet"
    let aa = new Array(s.length)
    for(let c = 0; c < indices; c ++){
        for(let t = c; t < s.length; t++){
        aa[c] += s
        console.log(aa[c])
    }
    }
    console.log(aa)



//console.log(s.rearrange())