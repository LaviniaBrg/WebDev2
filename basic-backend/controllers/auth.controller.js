import {createUser, loginUser} from "../models/db.js";
import {secret} from "../config/auth.config.js"
import {Router} from 'express';
import jwt from 'jsonwebtoken';
import {authMiddleware} from "../middleware/auth.js";

const router = Router();

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    if (username && password && email) {
        createUser(username, email, password)
            .then(() => {
                let user = {username: username};
                let authToken = jwt.sign(user, secret, {expiresIn: '420d'}, []);

                res.status(201);
                res.send({username: username, token: authToken})
            })
            .catch(() => {
                // user existiert bereits
                res.status(409);
                res.send();
            })
    }
});

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        loginUser(username, password)
            .then((isValid) => {
                if (isValid) {
                    let user = {username: username};
                    let authToken = jwt.sign(user, secret, {expiresIn: '420d'});

                    res.status(200);
                    res.send({username: username, token: authToken})
                } else {
                    res.status(403);
                    res.send();
                }
            })
            .catch((err) => {
                res.status(403);
                res.send();
            })
    }

})

router.get('/test', authMiddleware, (req, res) => {
    if (req.user) {
        res.status(200);
        res.send(req.user)
    } else {
        res.status(403);
        res.send();
    }
})

export {router as authRouter};
