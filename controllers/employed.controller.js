import Employed from "../models/Employed.js";

// Get All Departaments
async function getAllEmployees(req, res) {
    try {
        const employees = await Employed.find();

        return res.status(200).json(employees);

    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: 'Employees not found'
        });

    }
};

// Get A Employed By ID
async function getEmployedById(req, res) {
    try {
        const employed = await Employed.findById(req.params.idEmployed);
        return res.status(200).json(employed);
    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: 'Employed not found'
        });
    }
}


// Create Employed
async function createEmployed(req, res) {
    try {
        const newEmployed = await Employed.create({
            code: req.body.code,
            name: req.body.name,
            apellido1: req.body.apellido1,
            apellido2: req.body.apellido2,

            departamentCode: req.body.departamentCode
        }); 

        return res.status(201).json(newEmployed);
    } catch (err) {
        console.error(err);
        return res.status(501).json({
            message: 'Error creating a new employed'
        })
    }
};



// Update Employed
async function updateEmployedById(req, res) {

    const employedToUpdate = await Employed.findById(req.params.idEmployed);
    
    try {

        if(employedToUpdate !== null) {

            const { code, name, apellido1, apellido2, departamentCode } = req.body;

            employedToUpdate.code = code || employedToUpdate.code;
            employedToUpdate.name = name || employedToUpdate.name;
            employedToUpdate.apellido1 = apellido1 || employedToUpdate.apellido1;
            employedToUpdate.apellido2 = apellido2 || employedToUpdate.apellido2;
            employedToUpdate.departamentCode = departamentCode || employedToUpdate.departamentCode;

            await employedToUpdate.save();

            return res.status(200).json({
                message: 'Employed updated successfully',
                employedToUpdate: employedToUpdate
            })

        } else {
            return res.status(404).json("Employed not found");
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Can't update the Employed"
        })
    }
};



// Delete One Employed By Id
async function deleteOneEmployedById(req, res) {

    const employedToDelete = Employed.findById(req.params.idEmployed);

    try {
        if(!employedToDelete) {
            return res.status(404).json({
                message: 'Employed not found'
            })
        }

        const deleteEmployed = await Employed.deleteOne(employedToDelete);

        return res.status(200).json({
            message: 'Employed deleted successfully',
            deleteEmployed: deleteEmployed
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error deleted an employed'
        });
    }
    
}


// Delete All Employed
async function deleteAllEmployes(req, res) {
    try {
        const allEmployeesDeleted = await Employed.deleteMany();

        return res.status(200).json({
            message: 'All employees are deleted successfully',
            allEmployeesDeleted: allEmployeesDeleted
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error deleting all Employees'
        });
    }
}


// Export functions
export default {
    getAllEmployees: getAllEmployees,

    getEmployedById: getEmployedById,
    createEmployed: createEmployed,
    updateEmployedById: updateEmployedById,
    deleteOneEmployedById: deleteOneEmployedById,
    deleteAllEmployes: deleteAllEmployes
};