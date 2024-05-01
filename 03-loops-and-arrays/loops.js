var numbers = [6, 4, 9, 1, 5];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    total += numbers[i];
}
var average = total / numbers.length;
console.log("The average of the numbers is: " + average);
var names = ["Udaipur", "Nathdwara", "Rajsamand", "Banswara"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
var words = ["RSRTC", "GSRTC", "MSRTC", "KSRTC", "NWKRTC", "NEKRTC", "Madhya Pradesh Parivahan", "UPSRTC"];
for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
    var bus = words_1[_a];
    if (bus == "GSRTC") {
        console.log(bus + " Swatch Salamat Samaybadh");
    }
    else {
        console.log(bus);
    }
}
var cities = ["New Delhi Bangalore Chennai Hyderabad Mumbai"];
for (var _b = 0, cities_1 = cities; _b < cities_1.length; _b++) {
    var city = cities_1[_b];
    console.log(city);
}
cities.push("Pune");
cities.push("Nathdwara");
cities.push("Udaipur");
cities.push("Sajjangarh");
for (var _c = 0, cities_2 = cities; _c < cities_2.length; _c++) {
    var city = cities_2[_c];
    console.log(city);
}
