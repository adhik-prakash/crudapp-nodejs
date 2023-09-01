exports.testFunction = async (req, res) => {
  console.log("hello");

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((data) => res.json(data));
};
