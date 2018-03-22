/**
 * Created by pjm on 2018/3/5.
 */
const s = new Set();
[2,3,4,5,6].forEach(x => s.add(x))
console.log(s)
for(let i of s){
    console.log(i)
}