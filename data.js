let students = [
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
const getAll = () =>{
    return students;
};


const getItem = (name) =>{
     return   students.find((student) => {
        return student.name === name;
    });
}

const addItem = (newName) =>{
    const oldLength = students.length;
    let found = getItem(newName.name);
    if(!found){
        students.push(newName);
    }

    return {added:oldLength !== students.length, total:students.length};

}

const deleteItem = (name) =>{
    const oldLength = students.length;
    students = students.filter((item) =>{
        return item.name !== name;
    });

    return {deleted: oldLength !== students.length, total:students.length};
}

export{getAll, getItem, addItem, deleteItem}
