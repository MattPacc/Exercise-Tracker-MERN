import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import {body, validationResult} from 'express-validator';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

/**
 * Create a new exercise with the name, reps, weight, and date provided in the body
 *  Validate each field for required values using express-validator
 */
app.post('/exercises', [
    body('name').trim().isLength({ min: 1 }),
    body('reps').isInt({ min: 1 }),
    body('weight').isInt({ min: 1 }),
    body('unit').isIn(['kgs', 'lbs']),
    body('date').custom(value => isDateValid(value)),
  ], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isempty()) {
        res.status(400).json({Error: 'Invalid Request'});
    }

    exercises.createExercise( req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date )
    .then(exercise => {
        res.status(201).json(exercise);
    })
    .catch(error => {
        console.error(error);
        //Better to check error and send specific message instead
        res.status(400).json({Error: 'Request Failed'});
    });
});

/**
 * Retrieve all exercises
 */
app.get('/exercises', (req, res) => {
    exercises.findExercises()
    .then(exercises => {
            res.json(exercises);
    })
    .catch(error => {
        console.error(error);
        //Better to check error and send specific message instead
        res.status(400).json({Error: 'Request Failed'});
    });});

/**
 * Retrive the exercise corresponding to the ID provided in the URL
 */
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
    .then(exercise => {
        if (exercise !== null){
            res.status(200).json(exercise);
        }else{
            res.status(404).json({Error: 'Resource Not Found'});
        }
    })
    .catch(error => {
        console.error(error);
        //Better to check error and send specific message instead
        res.status(400).json({Error: 'Request Failed'});
    });
});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its name, reps, weight, unit, date to the values provided in the body.
 */
app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(updatedExercise => {
        if (updatedExercise){
            res.json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date});
        }else{
            res.status(404).json({Error: 'Resource Not Found'});
        }
    })
    .catch(error => {
        console.error(error);
        //Better to check error and send specific message instead
        res.status(400).json({Error: 'Request Failed'});
    });
});

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExercise(req.params._id)
    .then(deletedCount => {
        if (deletedCount === 1){
            res.status(204).send();
        }else{
            res.status(404).json({Error: 'Resource Not Found'});
        }
    })
    .catch(error => {
        console.error(error);
        //Better to check error and send specific message instead
        res.status(400).json({Error: 'Request Failed'});
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});