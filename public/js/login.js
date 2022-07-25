const form        = document.querySelector('form');
const members       = require('../mockStudents');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const studentDetails = await {
        studentName : form[0].value,
        studentPassword : form[1].value
    };

    await members.push(studentDetails)
    await console.log(members)

});