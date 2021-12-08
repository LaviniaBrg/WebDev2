import { user as _user } from "../models/user.model";
import { secret } from "../config/auth.config";
const User = _user;
const Role = role;

const Op = Sequelize.Op;

import { sign } from "jsonwebtoken";
import { hashSync, compareSync } from "bcryptjs";
import Sequelize from "sequelize";

export function signup(req, res) {
    // Save User to Database
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashSync(req.body.password, 8)
        })
        .then(user => {
            if (req.body.roles) {
                Role.findAll({
                    where: {
                        name: {
                            [Op.or]: req.body.roles
                        }
                    }
                }).then(roles => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "Benutzer wurde erfolgreich registriert!" });
                    });
                });
            } else {
                // user role = 1
                user.setRoles([1]).then(() => {
                    res.send({ message: "Benutzer wurde erfolgreich registriert!" });
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}

export function signin(req, res) {
    User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "Benutzer nicht gefunden." });
            }

            const passwordIsValid = compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Ungültiges Passwort!"
                });
            }

            const token = sign({id: user.id}, secret, {
                expiresIn: 86400 // 24 hours
            });

            const authorities = [];
            user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                    authorities.push("ROLE_" + roles[i].name.toUpperCase());
                }
                res.status(200).send({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: authorities,
                    accessToken: token
                });
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}
