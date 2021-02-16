const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 1,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };

   const obj = {
       myName:'David',
       myMethod: function(){
           console.log('Hello')
       }
   }
   console.log(obj.myMethod);
//    Take the school object and create the following methods to
// that object:
// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.
school.findPerson = (type,id)=> {
return school[type].find((person=>{
    return person.id===id;
}))
};

school.findPerson('students',10);

// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.
school.assignStudent = (id,subject) => {
    const student = school.findPerson('students',id);
    const teacher = school.teachers.find((teacher =>{
      return  teacher.subjects.includes(subject) && teacher.capacityLeft;
    }));
    if(teacher){
        teacher.students.push(student);
        teacher.capacityLeft--;

    }else {
        console.log ('Sorry no teachers')
    }console.log(teacher);
};
school.assignStudent(11,'biology');
// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects
// 4. Create a new method of anything you want.
school.assignTeacherSubject = (id,subject)=>{
    const teacher = school.findPerson('teachers',id);
    if(!teacher.subjects.includes(subject)){
    teacher.subjects.push(subject);
} else {console.log('He already teaches this subject')

}

}
school.assignTeacherSubject(1,'JavaScript');