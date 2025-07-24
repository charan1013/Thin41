const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({

    user_str_id: String,
    snippet_name: String,
    code_content: String,
    language: String,
    created_at:{type: Date, default: Date.now},
    updated_at:{type: Date, default: Date.now},

});

module.exports = mongoose.model('Snippet', snippetSchema);