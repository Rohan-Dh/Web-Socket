import express from "express";
import { join } from 'node:path';
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(join(__dirname, "../../index.html"));
});

export default router;