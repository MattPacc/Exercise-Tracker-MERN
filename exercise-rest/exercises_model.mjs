import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true},
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true, enum: ['kgs', 'lbs'] },
    date: { type: String, required: true },
    
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Create a new Exercise
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @return
 */
export const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

/**
 * Retreive All Exercises
 */
export const findExercises = async () => {
    return Exercise.find({});
}

/**
 * Find an Exercise by ID
 * @param {String} _id
 * @return 
 */
export const findExerciseById = async (_id) => {
    const exercise = Exercise.findById(_id);
    return exercise;
}

/**
 * Update the properties of the Exercise with the id value provided
 * @param {String} _id
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @return A promise. Resolves to the number of documents modified
 */
export const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.findByIdAndUpdate(_id, {name, reps, weight, unit, date}, {new: true});
    return result;
}

/**
 * Delete an Exercise with the id value provided
 * @param {String} _id
 * @return A promise. Resolves to the result of deletion operation
 */
export const deleteExercise = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id})
    return result.deletedCount;
}