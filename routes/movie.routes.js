import {Router} from 'express';





const router = Router();

router.route('/').post(createMovie).get(getMovie);


export default router;