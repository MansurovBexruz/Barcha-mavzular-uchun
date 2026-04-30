import { Router } from "express";
import { users } from "../db";
import type { User } from "../types";
import { faker } from "@faker-js/faker";

export const router = Router();

router.get("", (req, res) => {
	res.send({ data: users, success: true, error: null });
});

router.get("/:userId", (req, res) => {
	const userId = Number(req.params.userId);
	const user = users.find((user) => user.id === userId);

	if (!user)
		return res
			.status(404)
			.send({ data: null, success: false, error: `User not found with id ${userId}` });

	res.send({ data: user, success: true, error: null });
});
router.post("", (req, res) => {
	console.log("body = ", req.body);
	const user: User = { id: faker.number.int({ min: 1, max: 1000 }), ...req.body };
	users.push(user);

	res.send({ data: user, success: true, error: null });
});
router.put("/:userId", (req, res) => {});
router.delete("/:userId", (req, res) => {
	const userId = Number(req.params.userId);
	const deleteIdx = users.findIndex((user) => user.id === userId);

	if (deleteIdx === -1)
		return res
			.status(404)
			.send({ data: null, success: false, error: `User not found with id ${userId}` });

	const [deletedUser] = users.splice(deleteIdx, 1);

	res.send({ data: deletedUser, success: true, error: null });
});
