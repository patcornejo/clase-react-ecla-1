import {Router} from 'express';

const router = Router();

router.get('/configuration', (req, res) => {
    setTimeout(() => {
        res.json({
            success: true,
            options: ['Full String', 'Each Word', 'Order']
        })
    }, 3000);
})

export default router
