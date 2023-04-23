const bookModel = require('../models/bookModel');


// Get all books
const getTasks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new book
const saveTasks = async (req, res) => {
  try {
    const book = await bookModel.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a book by ID
const updateTask = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a book by ID
const deleteTask = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getTasks, saveTasks, updateTask, deleteTask };
