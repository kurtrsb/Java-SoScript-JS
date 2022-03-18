<<<<<<< Updated upstream
import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:root@127.0.0.1:3306/data')
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


export const sosie = sequelize.define('sosie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    price: {
        type: "DOUBLE"
    }

});

=======
import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:root@127.0.0.1:3306/data')
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


export const sosie = sequelize.define('sosie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    price: {
        type: "DOUBLE"
    }

});

>>>>>>> Stashed changes
sosie.sync()