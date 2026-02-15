import { hash } from "bcryptjs";

async function run() {
  const hashed = await hash("whatispass", 10);
  console.log(hashed);
}

run();
