const main = async () => {
const Greeter = await ethers.getContractFactory("Greeter")
const greeter = await Greeter.attach("0x575E9B4f2c3945d7CF07cb76628d29DF471692B8")

await greeter.greet()
let tx

tx = await greeter.setGreeting(`Hardhat: Hello ${new Date()}`)
rcpt = await tx.wait()  
await greeter.greet()
 
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();