// function prefixes(string, ans){
    let ans = []
    let string = ""
   for(let c = 0; c < ans.length; c++){
    if(string.charAt == ans[c]){
        return true;
    }
   }
   return false;
// }

Array.prototype.prefixe = function(s) {
    let d  = true;
for(let c = 0; c < this.length; c++){
    if(this[c] == s.charAt(c)){ 
    return d;
    }else{
        return false;
    }
}
}

s = "iloveleetcode";
array = ["i", "love", "leetcode", "apples"]
console.log(array.prefixe(s))