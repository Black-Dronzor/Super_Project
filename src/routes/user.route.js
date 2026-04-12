import { Router } from "express";

const router = router();

router.route("/register").post(registerUser)


export default router;