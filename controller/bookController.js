const Book = require('../model/bookModel');

class BookController {
    // Create a new book
    static async createBook(req, res) {
        try {
            const { title, author, publishedYear, genre } = req.body;
            const newBook = await Book.create({ title, author, genre, publishedYear });
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }   
    }

    // Get all books
    static async getAllBooks(req, res) {
        try {
            const books = await Book.findAll();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }   
    
    // Get a book by ID
    static async getBookById(req, res) {
        try {
            const { id } = req.params;
            const book = await Book.findByPk(id);
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update a book by ID
    static async updateBook(req, res) {
        try {
            const { id } = req.params;
            const { title, author, genre, publishedYear } = req.body;
            const [updated] = await Book.update(    
                { title, author, genre, publishedYear },
                { where: { id } }
            );
            if (updated) {
                const updatedBook = await Book.findByPk(id);
                res.status(200).json(updatedBook);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Delete a book by ID
    static async deleteBook(req, res) {
        try {
            const { id } = req.params;  
            const deleted = await Book.destroy({ where: { id } });
            if (deleted) {
                res.status(200).send({ message: 'Book deleted' });
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BookController;