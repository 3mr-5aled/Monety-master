// Object destructure

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        // name: "Pengiun",
    },
};

const { name: publisherName = "self-published" } = book.publisher;

console.log(publisherName);

// Array destructure

const item = ["Coffee (hot)", "2$", "5$", "8$"];

const [name, smallPrice, mediumPrice, largePrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);
