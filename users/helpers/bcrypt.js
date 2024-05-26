const bcrypt = require('bcryptjs');

const generateUserPassword = password => {
    return bcrypt.hashSync(password, 10);
}

const comparePassword = (password, anotherPassword) => { // another password is the one stored in the database ( the hash)
    return bcrypt.compareSync(password, anotherPassword);
}

exports.generateUserPassword = generateUserPassword;
exports.comparePassword = comparePassword;

