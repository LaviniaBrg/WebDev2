export default (sequelize, Sequelize) => {
    return sequelize.define("roles", {
        id: {
            type: Sequelize.integer,
            primaryKey: true
        },
        name: {
            type: Sequelize.string
        }
    });
};
