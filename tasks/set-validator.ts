import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

type Input = {
  address: string;
  router: string;
  add: boolean;
  remove: boolean;
}

task('set-validator', 'sets the status of an address on the contract')
  .addFlag('add', 'adds the given address to the validator set')
  .addFlag('remove', 'removes the given address from the validator set')
  .addParam('address', 'the address to add or remove from the validator set')
  .addParam('router', 'the router to operate on')
  .setAction(async (args: Input, hre: HardhatRuntimeEnvironment) => {
    const wethOmnibridgeRouterV2 = await hre.ethers.getContractAt('WETHOmnibridgeRouterV2', args.router)
    let status: boolean | null = args.add === true ? true : null
    status = status || (args.remove === true ? false : null)
    if (status === null) throw new Error('no status change provided')
    const inputs = [args.address, status] as const
    const statusTx = await wethOmnibridgeRouterV2.setValidatorStatus(...inputs)
    console.log('wethOmnibridgeRouterV2.setValidatorStatus(%o, %o) => %o', ...inputs, statusTx.hash)
    await statusTx.wait()
  })