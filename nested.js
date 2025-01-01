// <--------------Keys----------->
// const collage={
//     nam: "High school",
//     age: 250,
//     loc: "Dhaka"
// }
// const keys=Object.keys(collage)
// console.log(keys);
// <--------------valus----------->
// const devise={
//     mobile: 'Apple',
//     price: '60000',
//     color: 'Red',
//     model: '16+'
// }
// const valus= Object.values(devise)
// console.log(valus);



const collage={
    name: 'VNC',
    class: ['12', '11'],
    event:['Scince-fair', 'bijoy-dibosh', '21 Feb'],
    unique: {
                color: 'blue',
                result: {
                    gpa: 5,
                    merite: 'Top notch',
                }
    },
    "fevorite sub":['scince', 'Comarce', 'Biology']
}
const sub =collage["fevorite sub"]
collage.event[1]= '16Ei December'
collage['unique'].result.merite = "Not Bad"
console.log(sub);
delete collage.class;
console.log(collage.unique.result.gpa);
console.log(collage);


