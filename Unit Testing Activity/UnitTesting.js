function Greet(name) {

    if(name == null)
        return "Hello there!";

    if(Array.isArray(name)) {
        let output = "Hello,"
        for(let i = 0; i < name.length; i ++) {
            if(i == name.length - 1) 
                output += " " + name[i];
            else 
                output += " " + name[i] + ",";
        }

        return output;
    }
    
    let uppercaseName = name.toUpperCase();
    if(name == uppercaseName)
        return "HELLO " + name;

    return "Hello, " + name;
}

console.log(Greet(["Jon", "Paul", "Jorge", "Apple"]));