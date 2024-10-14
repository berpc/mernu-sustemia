const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const energy = require("./kpis");

const KPIsSchema = mongoose.Schema({
  date: Date,
  creator_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  period:String,
  year:String,
  state: String,
  site:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site'
  },
  energy_indicators:{
    total_fuel_energy_consumption:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_electrical_energy_consumption:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_energy_consumption:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_renewable_energy:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    percentage_of_renewable_energy:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    percentage_energy_from_fossil_fuels:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_energy_consumed_per_productive_unit:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_cost_of_energy_consumed:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
  },
  greenhouse_gas_indicators:{
    total_scope_1:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_scope_2:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_scope_3:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_emissions_per_unit_produced:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    total_emissions:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    scope_percentage_1:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    scope_percentage_2:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
    scope_percentage_3:{
      value:Number,
      reviews:[{
        date:Date,
        reviewer_user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        comments:String
      }],
      isApproved:Boolean
    },
  },
  reviews:[{
    date:Date,
    reviewer_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments:String,
    state:String,
  }],
  active:Boolean
});

KPIsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Kpis", KPIsSchema);