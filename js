// Assessment Requirements
// 1. Create a variable that can hold a number of NFT's. What type of variable might this be?
// 2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
//    The metadata values will be passed to the function as parameters. When the NFT is ready, 
//    you will store it in the variable you created in step 1
// 3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
// 4. For good measure, getTotalSupply() should return the number of NFT's you have created
// */

// // create a variable to hold your NFT's

// // this function will take in some values as parameters, create an
// // NFT object using the parameters passed to it for its metadata, 
// // and store it in the variable above.
// function mintNFT () {

// }

// // create a "loop" that will go through an "array" of NFT's
// // and print their metadata with console.log()
// function listNFTs () {

// }

// // print the total number of NFTs we have minted to the console
// function getTotalSupply() {

// }

// // call your functions below this line
// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function StudentNFT(S_name, S_Age, S_City, S_Salary) {
    const nft = {
        name: S_name,
        Age: S_Age,
        City: S_City,
        Salary: S_Salary
    };
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(NFT ${index + 1}:);
        console.log(`  Name: ${nft.name}`);
        console.log(`  S_Age: ${nft.Age}`);
        console.log(`  S_City: ${nft.City}`);
        console.log(`  S_Salary: ${nft.Salary}`);
    });
}    

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line

// Minting some NFTs
StudentNFT("Tom", "34", "Mumbai", "34k");
StudentNFT("Sam", "32", "Delhi", "76k");
StudentNFT("Joy", "29", "Surat", "65k");

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
console.log(Total NFTs minted: ${getTotalSupply()});
