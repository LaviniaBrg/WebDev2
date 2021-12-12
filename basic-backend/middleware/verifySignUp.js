import {roles as _ROLES} from "../models/role.model";
import {user as _user} from "../models/user.model";

const ROLES = _ROLES;
const User = _user;

function checkDuplicateUsernameOrEmail(req, res, next) {
    // Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Fehler! Benutzername bereits vergeben!"
            });
            return;
        }

        // Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Fehler! Email wird bereits verwendet!"
                });
                return;
            }
            next();
        });
    });
}

function checkRolesExisted(req, res, next) {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Fehler! Rolle existiert nicht = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

export default verifySignUp;
