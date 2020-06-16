var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');

router.get('/', (req, res) => {
    res.render("grupo/addupdate", {
        viewTittle: "Agregue nuevo grupo"
    });
});

router.post('/', (req, res) => {
    if(req.body._id == '')
        insertGrupo(req, res);
    else
        updateGrupo(req, res);
});

function insertGrupo(req, res){
    var grupo = new Grupo();
    grupo.nombre = req.body.nombre,
    grupo.numIntegrantes = req.body.numIntegrantes,
    grupo.genero = req.body.genero,
    grupo.nacionalidad = req.body.nacionalidad,
    grupo.añoCreación = req.body.añoCreación,
    grupo.añoSeparación = req.body.añoSeparación
    grupo.save((err, doc)=> {
        if (!err)
            res.redirect('grupo/listar');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("grupo/addupdate", {
                    viewTitle: "Agregue nuevo grupo",
                    grupo: req.body
            });
        }
        else
            console.log('Error durante la inserción : ' + err);
        }
    });
}

function updateGrupo(req, res) {
    Grupo.updateOne({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err) {res.redirect('grupo/lista');}
        else{
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('grupo/addupdate',{
                    viewTitle: "Actualizar Grupo",
                    grupo: req.body
                });
            }
            else
                console.log('Error al actualizar: ' + err);
        }
    });

}


router.get('/list', (req, res) => {
    Grupo.find((err, docs) => {
        if (!err) {
            res.render("grupo/lista", {
                grouplist: docs
            });
        }
        else {
            console.log('Error:' + err);
        }
    });
});
 
function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'full_name':
                body['full_nameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}
 
router.get('/:id', (req, res) => {
    Grupo.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("grupo/addupdate", {
                viewTitle: "Grupo Encontrado",
                employee: doc
            });
        }
    });
});
 
router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/grupo/lista');
        }
        else {
            console.log('Error al eliminar grupo:' + err);
        }
    });
});
 
module.exports = router;











