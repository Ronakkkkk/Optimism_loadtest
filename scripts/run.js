const main = async () => {
const Greeter = await ethers.getContractFactory("Greeter")
const greeter = await Greeter.attach("0x6F2A4b32474a12dC5dAb04025D75f4cd10073A86")

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