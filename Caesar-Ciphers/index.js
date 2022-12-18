function rot13(str) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newstr = ""
     for (let x = 0; x < str.length; x++){
      const indextofind = alpha.indexOf(str[x])
  
       if( indextofind == -1){
         newstr +=  str[x];
       }else{
         let stranswer = (indextofind +13) % 26 ;
         newstr += alpha[stranswer]
        
       }
       
     }
      
     return newstr
  }
  
  console.log(rot13("SERR CVMMN!"));