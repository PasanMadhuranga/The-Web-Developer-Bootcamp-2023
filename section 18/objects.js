// create an object
const person = {
    firstName: 'Pasan',
    lastName: 'Madhuranga'
}

console.log(person)

const kitchenSink = {
    favNum: 123,
    isFunny: true,
    colors: ['red', 'orange'],
    2020: 'sucks'
}

// access data from an object
console.log(kitchenSink['favNum']); // we use this when we access data dynamically
console.log(kitchenSink.isFunny);
console.log(kitchenSink.colors[1]);
console.log(kitchenSink[2020]);
console.log(kitchenSink['2020']); // same as above: every key is a string

// modify and add data in an object
const midterms = { danielle: 96, thomas: 78 }
midterms.thomas = 79; // or midterms['thomas'] = 79;
console.log(midterms);
midterms.ezra = 97; // or midterms['ezra'] = 97;
console.log(midterms);

// arrays + objects
const comments = [
    { username: 'Tammy', text: 'lololol', votes: 9 },
    { username: 'FishBoi', text: 'glub glub', votes: 123456 }
]

console.log(comments[1].text);

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);