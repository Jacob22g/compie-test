const faker = require('faker');
const User = require('../models/user');

const users = []

const createFakeUsers = () => {
    for (let i = 0; i < 1000; i++) {

        const name = faker.name.findName()
        const location_latitude = faker.address.latitude()
        const location_longitude = faker.address.longitude()

        const user = new User({
            name,
            location_latitude,
            location_longitude
        })

        users.push(user)

        // user.save().catch((e) => {
        //     console.log('error:',e)
        // })
    }
    console.log('users created and saved')
    return users
}

module.exports = { createFakeUsers }
