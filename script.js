// task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// task 2
let task_2_count = '';
for (let i = 1; i <= 10; i++) {
    task_2_count += i + ' ';
}
document.querySelector('.task-2-out').innerHTML = task_2_count;

// task 3
let task_3_count = '';
for (let i = 10; i >= 0; i--) {
    task_3_count += i + ' ';
}
document.querySelector('.task-3-out').innerHTML = task_3_count;

// task 4
let task_4_count = '';
for (let i = 0; i <= 10; i = i + 2) {
    task_4_count += i + ' ';
}
document.querySelector('.task-4-out').innerHTML = task_4_count;

// task 5
let task_5_count = '';
for (let i = 21; i >= 0; i = i - 3) {
    task_5_count += i + ' ';
}
document.querySelector('.task-5-out').innerHTML = task_5_count;

// task 6
for (let i = 0; i <= 5; i++) {
    document.querySelector('.task-6-out').innerHTML += '* * * * * *<br>';
}

//task 7 
document.querySelector('.task-7').onclick = () => {
    let count = +document.getElementById('task7_input').value;
    let task7_out = '';
    for (let i = count; i >= 0; i--) {
        task7_out += i + ' ';
    }
    document.querySelector('.task-7-out').innerHTML = task7_out;
}

//task 8
document.querySelector('.task-8').onclick = () => {
    let num1 = +document.getElementById('task8_input1').value;
    let num2 = +document.getElementById('task8_input2').value;
    let task8_out = '';
    for (let i = num1; i <= num2; i++) {
        task8_out += i + ' ';
    }
    document.querySelector('.task-8-out').innerHTML = task8_out;

}

//task 9
document.querySelector('.task-9').onclick = () => {
    let num1 = +document.getElementById('task9_input1').value;
    let num2 = +document.getElementById('task9_input2').value;
    if (num2 > num1) {
        let task9_out = '';
        for (let i = num1; i <= num2; i++) {
            task9_out += i + ' ';
        }
        document.querySelector('.task-9-out').innerHTML = task9_out;
    }

    else alert('Ошибка! Второе число должно быть больше первого!')
}

//task 10
let evenYears = '';
for(let i = 1902; i <= 1950; i+=2) {
    evenYears += i + ' ';
}
document.querySelector('.task-10-out').innerHTML = evenYears;

//task 11
let oneCount = document.querySelectorAll('.one');
document.querySelector('.task-11-out').innerHTML = "Колличество div.one = " + oneCount.length;

//task 12
document.querySelector('.task-12').onclick = () => {
    for(let i = 0; i < oneCount.length; i++) {
        oneCount[i].style.background = 'orange';
    }
}

//task 13
document.querySelector('.task-13').onclick = () => {
    for(let i = 0; i < oneCount.length; i++) {
        console.log(oneCount[i].innerHTML);
    }
}