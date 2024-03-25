import express from 'express';
import { getUserProfAndRepos } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile/:username', getUserProfAndRepos);

export default router;