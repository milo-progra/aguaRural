


const  render  = require('../app');
const Project = require('../models/project')

var controller = {

    home: function (req, res) {
        res.render('index')
    },
    agregarMes: function(req, res){
        res.render('agregar')
    },

    saveMes: function (req, res) {
        
        var project = new Project();
        var params = req.body;
        project.mes = params.mes;
        project.consumo = params.consumo;
        project.precio = params.precio;

        project.save((err, mesAlmacenado) => {
            if (err) return res.status(500).send({ message: 'error' })

            if (!mesAlmacenado) return res.status(404).send({ message: 'no se podido guardar el projecto ' })
            return res.status(200).redirect('/')
         
        });
    },

    view:function (req, res) {
        Project.find({}).exec((err, projects)=>{
            if(err) return res.status(500).send({message:'error'})
            if(!projects) return res.status(404).send({message:' no fue posible mostrar los projectos!!'})

            return res.render('index', {projects:projects})
        });
    },

    delete:function (req, res) {
        var projectId  = req.params.id

        Project.findByIdAndDelete(projectId, (err, projectDelete)=>{
            if(err) return res.status(500).send({message:'error al eliminar el projecto'})
            if(!projectDelete) return res.status(404).send({message:'no se a encontrado el projecto que decea borrar'})
            
            return res.redirect('/')
        })
    }



}

module.exports = controller;