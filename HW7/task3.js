function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw TypeError("Обидва значення повинні бути числами");
    }
    if (denominator === 0) {
        throw TypeError("Ділення на нуль неможливе");
    }
    return numerator / denominator;
}

try {
    const result = divide(10, 5);
    console.log(`Результат: ${result}`);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
} finally {
    console.log('Робота завершена');
}

try {
    const result = divide(10, 0);
    console.log(`Результат: ${result}`);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
} finally {
    console.log('Робота завершена');
}

try {
    const result = divide("a", 5);
    console.log(`Результат: ${result}`);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
} finally {
    console.log('Робота завершена');
}
