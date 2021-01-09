import { sequelize } from '../db/database';
import User from './user';
import {UserInterface } from './user';
import { Abonnement } from './abonnement';
import {Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,} from 'sequelize'

export interface parentInetrface {
    User_id:number| null | undefined;
}

export default class parent extends User {
    User_id:number | null | undefined
    Subscription?:number
}

parent.init({
   User_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
      },
   Subscription: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue:0
      },
    },
    
      {
        tableName: "parent",
        timestamps: false,
        sequelize, // passing the `sequelize` instance is required
      }
)

console.log('test')
parent.belongsTo(User,{foreignKey:'User_id'})
//Abonnement.belongsToMany(Abonnement,{through:'parent_has_abonnement'})
//parent.belongsToMany(Abonnement, { through: parent_has_Abonnement });