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