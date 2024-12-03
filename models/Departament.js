import { Schema, model, mongoose } from "mongoose";

const departamentSchema = Schema({
    idDepartament: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Departament = mongoose.model("Departament", departamentSchema);

export default Departament;