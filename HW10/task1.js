import Book from './Book.js';
import EBook from './EBook.js';

const Book1 = new Book('Sapiens', 'Юваль Ной Харарі', 2011);
const Book2 = new Book('Homo Deus', 'Юваль Ной Харарі', 2015);
const Book3 = new Book('21 урок для ХХІ століття', 'Юваль Ной Харарі', 2018);

const downloadedEbook = new EBook('Sapiens', 'Юваль Ной Харарі', 2012, 'epub');

Book1.printInfo();
Book2.printInfo();
Book3.printInfo();
console.log('');
downloadedEbook.printInfo();

console.log('');
const allBooks = [Book1, Book2, Book3, downloadedEbook];
console.log('Найдавніща книга');
const oldest = Book.oldestBook(allBooks);
oldest.printInfo();

console.log('');
const paperBook = new Book('Nexus', 'Юваль Ной Харарі', 2024);
const eCopy = EBook.fromBook(paperBook, 'epub');
eCopy.printInfo();
