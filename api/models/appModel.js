var mongoose = required("mongoose");

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    text: String,
    isDone: Boolean
});

let Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;
