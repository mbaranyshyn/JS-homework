function validate(properties, values) {
    for (i = 0; i < properties.length; i++) {
        if (values[properties[i]] == undefined) {
            throw new Error("Propetry " + properties[i] + " is undefined");
        }
    }
    return true;

}
try {
    console.log(validate(["name", "surname"], { name: "Roman", surname: "Rodomansky" }));
    console.log(validate(["name", "surname", "age"], { name: "Roman", surname: "Rodomansky" }));
} catch (error) {
    console.log(error.message);
}