var Adoption = artifacts.require("Adoption");

module.exports = async function(deployer) {
  instancia = await Adoption.deployed();
  var hola = await instancia.getAdopters();
  console.log(hola);
};