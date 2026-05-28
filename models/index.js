const studentTable = require('../models/studentTable')
const identityCard = require('../models/identityCard')

//one to one
studentTable.hasOne(identityCard)
identityCard.belongsTo(studentTable)

module.exports={
    studentTable,
    identityCard
}
