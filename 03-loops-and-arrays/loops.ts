let numbers:number[]=[6,4,9,1,5];
let total:number=0;
for(let i=0;i<numbers.length;i++)
    {
        console.log(numbers[i]);
        total+=numbers[i];
    }
let average:number=total/numbers.length;
console.log("The average of the numbers is: "+average);
let names:string[]=["Udaipur","Nathdwara","Rajsamand","Banswara"];
for(let name of names)
    {
        console.log(name);
    }
let words:string[]=["RSRTC","GSRTC","MSRTC","KSRTC","NWKRTC","NEKRTC","Madhya Pradesh Parivahan","UPSRTC"];
for(let bus of words)
    {
        if(bus=="GSRTC")
            {
                console.log(bus+" Swatch Salamat Samaybadh");
            }
        else
        {
            console.log(bus);
        }
        
    }

let cities:string[]=["New Delhi Bangalore Chennai Hyderabad Mumbai"]
for(let city of cities)
    {
        console.log(city);
    }
cities.push("Pune");
cities.push("Nathdwara");
cities.push("Udaipur");
cities.push("Sajjangarh");
for(let city of cities)
    {
        console.log(city);
    }
