import express from 'express';
import { explorePopularRepos } from '../controllers/explore.controller.js';
import { guaranteeAuthenticated } from '../middleware/guaranteeAuthenticated.js';

const router = express.Router();

router.get('/repos/:language', guaranteeAuthenticated, explorePopularRepos);

export default router;