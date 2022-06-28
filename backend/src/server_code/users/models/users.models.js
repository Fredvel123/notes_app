import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database/db.connection.js';

const usersModel = sequelize.define('users' ,{
    id: {
        type: DataTypes.UUID,
        autoIncrement: true, 
        primaryKey: true
    },
    first_name: {
        type: DataTypes.TEXT  // only 25 charactereres      
    },
    middle_name: {
        type: DataTypes.TEXT // only 215 characterers
    },
    last_name: {
        type: DataTypes.TEXT // only 60 characterers
    },
    username: {
        type: DataTypes.TEXT, // only 30 characterers
        unique: true
    },
    // createdat: {
    //     type: "TIMESTAMP",
    //     defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    //     allowNull: false,
    // },
    // updatedat: {
    //     type: "TIMESTAMP",
    //     defaultValue: sequelize.literal(
    //       "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    //     ),
    //     allowNull: false,
    // },
    country_code: {
        type: DataTypes.INTEGER
    },
    number_phone: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT, // only 100 characterers
        allowNull: false,
        unique: true
    },
    bio: {
        type: DataTypes.TEXT
    },
    pic_profile: {
        type: DataTypes.TEXT
    },
    pic_id: {
        type: DataTypes.TEXT
    },
    key_confirm_email: {
        type: DataTypes.TEXT // only 12 characterers
    },
    email_confirmed: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
})

export default usersModel;