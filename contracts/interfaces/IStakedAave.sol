// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

interface IStakedAave {
    function stakersCooldowns(address staker) external view returns (uint256);

    function balanceOf(address user) external view returns (uint256);

    function stake(address to, uint256 amount) external;

    function redeem(address to, uint256 amount) external;

    function cooldown() external;

    function claimRewards(address to, uint256 amount) external;
}
