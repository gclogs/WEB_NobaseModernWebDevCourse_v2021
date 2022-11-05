import { Router } from 'express';
import UserRouter from '../routes'; 

const router = Router();

router.use('/users', UserRouter);

export default router;