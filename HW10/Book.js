class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      throw new Error('Поле "Назва" не має бути порожнім');
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string') {
      throw new Error('Поле "Автор" не має бути порожнім');
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Рік має бути числом більшим за 0');
    }
    this._year = value;
  }

    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`)
    }

    static oldestBook(booksArray) {
    return booksArray.reduce((oldest, current) => {
    return current.year < oldest.year ? current : oldest;
    });
 }
}

 export default Book;