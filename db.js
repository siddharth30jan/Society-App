const Sequelize= require('sequelize');

const db= new Sequelize('bong','root','siddharth',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})


    const Societies= db.define('society',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
            },
        SocietyName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
            },
        SocietyNotif: {
            type: Sequelize.STRING,
            allowNull: true
        }        
        })

        const Users= db.define('kuch',{
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
                },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
                },
            password: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
            cartBox: Sequelize.STRING
            })
        

db.sync()
.then(()=>console.log("Database has been synced"))
.catch((err)=>console.error("Error syncing database!"))

exports=module.exports={
   db, Societies,Users
}