import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const allowedFormats = ['pdf', 'epub', 'mobi'];
    if (typeof value !== 'string') {
      throw new Error(`Формат файлу не має бути порожнім`);
    }
    this._fileFormat = value;
}

    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    };
 
  static fromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

 export default EBook;