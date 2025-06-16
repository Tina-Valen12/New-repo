function handleNum(num, handleEven, handleOdd) {
        if (num % 2 === 0) {
        handleEven(num); 
        }
        else {
        handleOdd(num);
        }
    }

function handleEven(num) {
    console.log("number is even");
}

function handleOdd(num) {
    console.log("number is odd");
}

handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);
