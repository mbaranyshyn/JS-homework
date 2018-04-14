function validate(properties, values) {
    for (i = 0; i < properties.length; i++) {
        if (values[properties[i]] == undefined) {
            throw console.error("Propetry " + properties[i] + " is undefined");
        }
    }
    return true;

}
try {
    console.log(validate(["name", "surname"], { name: "Roman", surname: "Rodomansky" }));
    console.log(validate(["name", "surname", "age"], { name: "Roman", surname: "Rodomansky" }));
} catch (e) {
    console.log();
}