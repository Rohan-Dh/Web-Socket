import { loginValidator } from "../validator/auth.validator.js";
import pool from "../configs/database.config.js";

export const login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const response = loginValidator(email, password);
    if (!response.valid) res.send(response.errors);
    await pool.execute(
        `INSERT INTO user`
    )
    res.send(response);
}

export const signup = async (req, res) => {
    const { email, password } = req.body;

}