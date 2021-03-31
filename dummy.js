const myArray = [
    {
        key: 'blah',
        value: 'Blah Blah'
    },
    {
        key: 'foo',
        value: 'Foos'
    },
    {
        key: 'bar',
        value: 'Bars'
    },
    {
        key: 'baz',
        value: 'Bazingo'
    }
];
const resObject = myArray.find(item => item.key === "foo");
for (const key of myArray) {} 
    console.log(key)
// Here you can access object which you want
console.log(resObject);