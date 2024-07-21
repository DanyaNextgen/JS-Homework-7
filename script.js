let students = ['Davlat', 'Feruz', 'Asad', 'Danya']

let name = prompt(students + ' кого хочешь кикнуть  ').trim()

let index = students.indexOf(name)

if (index !== -1) {
    students.splice(index, 1)
    console.log(students);
}
else {
    alert('Имя не найдено')
}
