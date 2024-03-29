import express from 'express';
import { getUserProfAndRepos } from '../controllers/user.controller.js';
import { guaranteeAuthenticated } from '../middleware/guaranteeAuthenticated.js';
import { getLikes, likeProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile/:username', getUserProfAndRepos);

router.get('/likes', guaranteeAuthenticated, getLikes);
router.post('/like/:username', guaranteeAuthenticated, likeProfile);

export default router;