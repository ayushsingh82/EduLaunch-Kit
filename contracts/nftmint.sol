// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // Price of each NFT
    uint256 public mintPrice;

    // Mapping from token ID to token metadata
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory name, string memory symbol, uint256 initialMintPrice) ERC721(name, symbol) {
        mintPrice = initialMintPrice;
    }

    // Function to set the mint price
    function setMintPrice(uint256 newPrice) external onlyOwner {
        mintPrice = newPrice;
    }

    // Function to mint a new NFT
    function mintNFT(string memory tokenURI) external payable {
        require(msg.value >= mintPrice, "Insufficient funds to mint NFT");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    // Function to set the token URI
    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = tokenURI;
    }

    // Function to get the token URI
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    // Function to withdraw funds from the contract
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
