const { assert } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const {
    isCallTrace,
} = require("hardhat/internal/hardhat-network/stack-traces/message-trace")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function () {
          let fundMe
          let deployer
          const sendValue = ethers.utils.parseEther("1")
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })
      })

isCallTrace("allows people to fund and withdraw", async function () {
    await fundMe.fund({ value: sendValue })
    await fundMe.withdraw()
    const endingBalance = await fundMe.provider.getBalance(fundMe.balance)
    assert.equal(endingBalance.toString(), "0")
})
