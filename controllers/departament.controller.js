import Departament from "../models/Departament.js";

// Get All Departaments
async function getAllDepartaments(req, res) {
    try {
        const departaments = await Departament.find();

        return res.status(200).json(departaments);

    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: 'Departaments not found'
        });

    }
};

// Get A Departament By ID
async function getDepartamentById(req, res) {
    try {
        const departament = await Departament.findById(req.params.idDepartament);
        return res.status(200).json(departament);
    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: 'Departament not found'
        });
    }
}


// Create Departament
async function createDepartament(req, res) {
    try {
        const newDepartament = await Departament.create({
            idDepartament: req.body.idDepartament,
            name: req.body.name
        }); 

        return res.status(201).json(newDepartament);
    } catch (err) {
        console.error(err);
        return res.status(501).json({
            message: 'Error creating a new departament'
        })
    }
};


// Update Departament
async function updateDepartament(req, res) {

    const departamentToUpdate = await Departament.findById(req.params.idDepartament);
    
    try {

        if(departamentToUpdate !== null) {

            const { idDepartament, name } = req.body;

            departamentToUpdate.idDepartament = idDepartament || departamentToUpdate.idDepartament;
            departamentToUpdate.name = name || departamentToUpdate.name;

            await departamentToUpdate.save();

            return res.status(200).json({
                message: 'Departament updated successfully',
                departamentToUpdate: departamentToUpdate
            })

        } else {
            return res.status(404).json("Departament not found");
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Can't update the departament"
        })
    }
};


// Delete One Departament By Id
async function deleteOneDepartament(req, res) {

    const departamentToDelete = Departament.findById(req.params.idDepartament);

    try {
        if(!departamentToDelete) {
            return res.status(404).json({
                message: 'Departament not found'
            })
        }

        const deleteDepartament = await Departament.deleteOne(departamentToDelete);

        return res.status(200).json({
            message: 'Departament deleted successfully',
            deleteDepartament: deleteDepartament
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error deleted a departament'
        });
    }
    
}

// Delete All Departaments
async function deleteAllDepartaments(req, res) {
    try {
        const allDepartamentsDeleted = await Departament.deleteMany();

        return res.status(200).json({
            message: 'All departaments are deleted successfully',
            allDepartamentsDeleted: allDepartamentsDeleted
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error deleting all Departaments'
        });
    }
}


// Export functions
export default {
    getAllDepartaments: getAllDepartaments,
    getDepartamentById: getDepartamentById,
    createDepartament: createDepartament,
    updateDepartament: updateDepartament,
    deleteOneDepartament: deleteOneDepartament,
    deleteAllDepartaments: deleteAllDepartaments
};