const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require('shortid');
const Usuarios = require('../models/Usuarios');
const Post = require('../models/Post');

const Publicaciones = db.define(
    'publicaciones',{
        id : {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        titulo :{
            type: Sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : {
                    msg : 'Tienes que Agregar un titulo'
                }
            }
        },
        slug : {
            type: Sequelize.STRING,

        },
        invitado : { 
            type : Sequelize.STRING
        },
        descripcionBreve :{
            type: Sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : {
                    msg : 'Tienes que Agregar un titulo'
                }
            }
        },
        descripcion : {
            type : Sequelize.TEXT,
            allowNull : false,
            validate : {
                notEmpty : {
                    msg : 'Agrega una descripcion para la Publicación'
                }
            }
        },
        fecha : {
            type : Sequelize.DATEONLY,
            allowNull : false,
            validate : {
                notEmpty : {
                    msg : 'Agrega una fecha para la Publicación'
                }
            }
        },
        hora : {
            type : Sequelize.TIME,
            allowNull : false,
            validate : {
                notEmpty : {
                    msg : 'Agrega una hora para la Publicación'
                }
            }
        },
        direccion : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : {
                    msg : 'Agrega una dirección para la Publicación'
                }
            }
        },
        asistencia : {
            type : Sequelize.ARRAY(Sequelize.INTEGER),
            defaultValue : []
        },
        imagen:{
            type:Sequelize.TEXT
        },
        asistiEvento: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
    },{
        hooks:{
            async beforeCreate(publicaciones) {
                const url = slug(publicaciones.titulo).toLowerCase;
                publicaciones.slug = `${url}-${shortid.generate()}`;
            },
        }
    }

);
Publicaciones.belongsTo(Usuarios);
Publicaciones.belongsTo(Post);
module.exports = Publicaciones;