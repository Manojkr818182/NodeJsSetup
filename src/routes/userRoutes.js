import express from 'express';
import {
    hello,
    register
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', hello);
router.post('/register', register);
export default router;