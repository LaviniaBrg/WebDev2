export default (sequelize, Sequelize) => {
    return sequelize.define("users", {
        username: {
            type: Sequelize.string
        },
        email: {
            type: Sequelize.string
        },
        password: {
            type: Sequelize.string
        }
    });
};
