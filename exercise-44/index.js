
let items = ["fruital", "vegeterian", "cheese"];

function make_sandwich(...items) {
    console.log("Summary: " + items.join(", "))
}

make_sandwich(...items)
make_sandwich(...items, "souce")
make_sandwich(...items, "souce", "chili")