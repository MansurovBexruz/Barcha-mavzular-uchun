import type { User } from "./types";
import { sleep } from "./utils";
import { faker, tr } from "@faker-js/faker";

const btnPostRegister = document.querySelector(
  ".btn-post-register"
) as HTMLButtonElement;
const btnPostCreateGame = document.querySelector(
  ".btn-post-create-game"
) as HTMLButtonElement;
const baseURL = "http://localhost:4000";

let user: User | null = null;
const handleRegister = async (e: MouseEvent) => {
  const btn = e.target as HTMLButtonElement;
  btn.innerHTML += "...";
  const registerBody: Pick<User, "name" | "email" | "password"> = {
    name: faker.person.firstName().toLowerCase(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password({ length: 4 }),
  };

  await sleep();

  try {
    const res = await fetch(`${baseURL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(registerBody),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    user = data.player;
  } catch (error) {
  } finally {
    btn.innerHTML = btn.innerHTML.replace("...", "");
  }
};

const handleCreateGame = async (e: MouseEvent) => {
  const btn = e.target as HTMLButtonElement;
  btn.innerHTML += "...";

  await sleep();

  if(!user) return alert("User not found")
  try {
    const res = await fetch(`${baseURL}/games`, {
      method: "POST",
      body: JSON.stringify({ userId: user?.id }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  } finally {
    btn.innerHTML = btn.innerHTML.replace("...", "");
  }

};

btnPostRegister.addEventListener("click", handleRegister);
btnPostCreateGame.addEventListener("click", handleCreateGame);
