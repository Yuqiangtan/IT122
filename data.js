export let students = [
    { name : "tom", age : 24, classes : ["itc298", "cs110"],gender:"male"},
    { name : "jack", age : 69, classes : ["web150", "cs110"],gender:"male" },
    { name : "bin", age : 27, classes : ["web150", "web120"],gender:"male" },
    { name : "alan", age : 21, classes : ["csc150", "web120"],gender:"male" },
    { name : "james", age : 24, classes : ["eng150", "itc120"],gender:"male" }
    ];


// const getAll = () => {
//     return students.forEach((students)=> {
//         console.log( 'name :'  + students.name + ', age : ' + students.age + ', classes : ['+ students.classes +'],gender:"'+ students.gender + '"' )
//     });
// }
//  console.log(getAll())
export let getAll = () =>{
    return students;
};


export let getItem = (name) =>{
     return   students.find((student) => {
        return student.name === name;
    });
}
//  console.log(getItem("Alan"))