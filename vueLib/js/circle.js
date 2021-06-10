import _,{ta} from "./testDefault.js";

function area(redius){
    console.log(_());
    console.log(ta);
    return Math.PI*redius*redius;
}
function circumference(redius){
    return 2*Math.PI*redius;
}
var Person=function(name){
    this.name=name;
}
var person = new Person("张三");
export { area as area,circumference as circumference,person };