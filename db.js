const Sequelize= require('sequelize');

const db= new Sequelize('societapp','root','siddharth',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})


    const Societies= db.define('societynew',{
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

        const Users= db.define('consumers',{
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
                },
                firstname: {type: Sequelize.STRING},
                lastname: {type: Sequelize.STRING},
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