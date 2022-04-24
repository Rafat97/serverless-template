const deploy = async (dir) => {
  await $`cd ${dir} && sls deploy --verbose`;
};

const remove = async (dir) => {
  await $`cd ${dir} && sls remove --verbose`;
};

let PWD = (await $`pwd`).stdout.trim().replace(/\r?\n|\r/g, "");

const SERVICE_ROOT = `${PWD}/services`;

const serviceFolderName = ["test-api-service"];

for (const iterator of serviceFolderName) {
  console.log(`Start Building ${iterator}`);

  console.log(` ---------------------------`);
  const serverless_file = `${SERVICE_ROOT}/${iterator}/serverless.yml`;
  //deploy serverless

  await $`cd ${SERVICE_ROOT}/${iterator} && yarn`;
  let token = await question(
    `Choose  ["deploy", "remove", "skip", "exit"] variable: `,
    {
      choices: ["deploy", "remove", "skip", "exit"],
    }
  );

  if (token === "exit") {
    process.exit(0);
  } else if (token === "deploy") {
    await deploy(`${SERVICE_ROOT}/${iterator}`);
  } else if (token === "remove") {
    await remove(`${SERVICE_ROOT}/${iterator}`);
  }

  console.log(`End Building ${iterator}`);
  console.log(` ---------------------------`);
}
