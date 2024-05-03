function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
;
describe_city("Karachi"); //default country                          
describe_city("Islamabad"); //default country
describe_city("Istanbul", "Turkey"); //custom city and country
