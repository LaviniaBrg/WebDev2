export function allAccess(req, res) {
    res.status(200).send("Public Content.");
}

export function userBoard(req, res) {
    res.status(200).send("User Content.");
}
