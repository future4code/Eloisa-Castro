import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commercialClient";

const eloisa = new ResidentialClient("Eloisa", '000.000.000-01', '01101-010', 100)
const astrodev = new ResidentialClient("Astrodev", '000.000.000-20', '02222-010', 50)

const future4 = new CommercialClient("Future4", '123.123.123/0001-10', '01212-001', 500)
const astrodevCafe = new CommercialClient("Astrodev Café", '123.123.555/0001-10', '01232-001', 600)

console.log(astrodevCafe)
console.log(astrodevCafe.calculateBill())