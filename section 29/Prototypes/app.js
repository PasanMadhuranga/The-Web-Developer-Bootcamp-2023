String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()}!!!!`
}
console.log('Pasan'.yell())

Array.prototype.pop = () => 'Sorry I want that element, I will never pop it off'
const nums = [6, 7, 8, 9]
console.log(nums.pop())