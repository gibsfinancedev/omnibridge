pragma solidity 0.7.5;

import "./EternalStorage.sol";
import "./OwnedUpgradeabilityProxy.sol";

/**
 * @title EternalStorageProxy
 * @dev This proxy holds the storage of the token contract and delegates every call to the current implementation set.
 * Besides, it allows to upgrade the token's behaviour towards further implementations, and provides basic
 * authorization control functionalities
 */
// solhint-disable-next-line no-empty-blocks
contract EternalStorageProxy is EternalStorage, OwnedUpgradeabilityProxy {

}