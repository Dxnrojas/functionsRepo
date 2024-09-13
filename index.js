// Sort array of numbers in ascending or descending order
function sortNumbers(arr, order = 'asc') {
    return arr.sort((a, b) => order === 'asc' ? a - b : b - a);
}

// Filter array of objects based on a property value
function filterByProperty(arr, property, value) {
    return arr.filter(item => item[property] === value);
}

// Map over an array and create a new array by transforming each element
function mapToNewArray(arr, callback) {
    return arr.map(callback);
}

// Counter example: Simple counter with increment and decrement
class Counter {
    constructor(initialValue = 0) {
        this.count = initialValue;
    }

    increment() {
        this.count++;
        console.log(`Count: ${this.count}`);
    }

    decrement() {
        this.count--;
        console.log(`Count: ${this.count}`);
    }

    reset() {
        this.count = 0;
        console.log(`Count reset to ${this.count}`);
    }
}

// Change button state (enable/disable)
function toggleButtonState(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.disabled = !button.disabled;
        console.log(`Button state: ${button.disabled ? 'Disabled' : 'Enabled'}`);
    } else {
        console.error('Button not found');
    }
}

// Example usage of sort, filter, and map
function exampleUsage() {
    const numbers = [10, 5, 8, 3, 2];

    console.log('Original array:', numbers);

    const sortedAsc = sortNumbers(numbers, 'asc');
    console.log('Sorted in ascending order:', sortedAsc);

    const sortedDesc = sortNumbers(numbers, 'desc');
    console.log('Sorted in descending order:', sortedDesc);

    const fruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'grape', color: 'purple' },
        { name: 'orange', color: 'orange' }
    ];

    const filteredFruits = filterByProperty(fruits, 'color', 'yellow');
    console.log('Filtered fruits by color yellow:', filteredFruits);

    const mappedFruits = mapToNewArray(fruits, fruit => fruit.name.toUpperCase());
    console.log('Mapped fruit names to uppercase:', mappedFruits);
}

// Event listener for button click (to toggle button state)
function setupButtonToggle(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => toggleButtonState(buttonId));
    } else {
        console.error('Button not found for toggle setup');
    }
}

// Example of setting up a button counter
function setupButtonCounter(buttonId) {
    const button = document.getElementById(buttonId);
    const counter = new Counter();

    if (button) {
        button.addEventListener('click', () => counter.increment());
    } else {
        console.error('Button not found for counter setup');
    }
}

// Exporting functions for potential external use (for modules)
// export { sortNumbers, filterByProperty, mapToNewArray, Counter, toggleButtonState, exampleUsage, setupButtonToggle, setupButtonCounter };

// Initialize example usage when script is loaded
exampleUsage();

