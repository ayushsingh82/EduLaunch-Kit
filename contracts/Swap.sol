// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-core/contracts/interfaces/IERC20.sol";

contract TokenSwap {
    address private constant UNISWAP_V2_ROUTER = 0x10ED43C718714eb63d5aA57B78B54704E256024E; // PancakeSwap Router on BSC
    address private constant WBNB = 0xBB4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c; // Wrapped BNB address on BSC

    address private constant EDU = 0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639; // $EDU token address on BSC
    address private constant MATIC = 0xcc42724C6683b7E57334c4E856f4c9965ed682bD; // $MATIC token address on BSC

    IUniswapV2Router02 public uniswapV2Router;

    constructor() {
        uniswapV2Router = IUniswapV2Router02(UNISWAP_V2_ROUTER);
    }

    function swapEDUforMATIC(uint256 eduAmount, uint256 minMATIC) external {
        IERC20(EDU).transferFrom(msg.sender, address(this), eduAmount);
        IERC20(EDU).approve(address(uniswapV2Router), eduAmount);

        address;
        path[0] = EDU;
        path[1] = WBNB;
        path[2] = MATIC;

        uniswapV2Router.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            eduAmount,
            minMATIC,
            path,
            msg.sender,
            block.timestamp
        );
    }

    function swapMATICforEDU(uint256 maticAmount, uint256 minEDU) external {
        IERC20(MATIC).transferFrom(msg.sender, address(this), maticAmount);
        IERC20(MATIC).approve(address(uniswapV2Router), maticAmount);

        address;
        path[0] = MATIC;
        path[1] = WBNB;
        path[2] = EDU;

        uniswapV2Router.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            maticAmount,
            minEDU,
            path,
            msg.sender,
            block.timestamp
        );
    }
}
