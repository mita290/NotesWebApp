import express from 'express';
import db from '../db/db.js';

const router = express.Router();

router.get("/", async (req, res) => {
    const notes = await db.query("SELECT * FROM notes ORDER BY created_at DESC");
    res.json(notes);
})


router.post("/", async (req, res) => {
    const { title, content } = req.body;
    const newNote = await db.query(
        "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
        [title, content]
    );
    res.json(newNote.rows[0]);
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM notes WHERE id = $1", [id]);
    res.json({message: "Deleted successfully"});
});

export default router;