import express from 'express';
import getAll, {getOneById} from '../controllers/recipies.js'


const router = express.Router()


router.get('/',getAll)

router.get('/:id',getOneById)



export default router