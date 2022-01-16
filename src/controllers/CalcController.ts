import { Request, Response, Router } from 'express';
import CalcService from '../services/CalcService'

const router = Router();

router.get('/', async function (req: Request, res: Response) {
    const result = CalcService.get()
    return res.send(result);
});

router.post('/', async function (req: Request, res: Response) {
  const value = req.body.value
  CalcService.save(value)
  return res.send("OK")
})

export default router;
