export const stars = (n) => {
  var arr=[]
    for(var i=1; i<=n; i++){
      var star = "*"
      var allstars = star.repeat(i)
      arr.push(allstars)
    }
  return arr
}