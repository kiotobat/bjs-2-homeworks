class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;
    }


    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                return this.books.splice([i], 1)[0];
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark (mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (this.marks[subject] === undefined) {
                this.marks[subject] = [];
            }
            return this.marks[subject].push(mark);
        } else {
            return console.log("Оценка несоответствует значениям");
        }
    }

    getAverageBySubject (subject) {
        if (this.marks[subject] === undefined) {
            return 0;
        } else {
            return this.marks[subject].reduce((acc, mark) => acc + mark / this.marks[subject].length, 0);
        }
    }

    getAverage (){
        let subjects = Object.keys(this.marks);
        let sumAverageMarks = 0;
        let totalSubjects = 0;
        for (let subject of subjects) {
            let averageMark = this.getAverageBySubject(subject);
            sumAverageMarks += averageMark;
            totalSubjects++;
        }

        if (totalSubjects === 0) {
            return 0
        } else {
            return sumAverageMarks / totalSubjects;
        }
    }
}