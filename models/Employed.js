import { Schema, model, mongoose } from "mongoose";

const employedSchema = Schema({
    code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true
    },
    apellido2: {
        type: String,
        required: true
    },
    departamentCode: {
        type: mongoose.Types.ObjectId,
        ref: "Departament"
    }
});

const Employed = mongoose.model("Employees", employedSchema);

export default Employed;