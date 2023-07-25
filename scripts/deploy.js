const main = async () => {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hey!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  // Call the greet function (No need to await for view functions)
  const greeting = await greeter.greet();
  console.log("Greeting:", greeting);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("Error occurred:", error);
    process.exit(1);
  }
};

runMain();