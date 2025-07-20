const axios = require('axios');

test("GET posts", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    expect(response.status).toBe(200);
});

test("GET user 1", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
});

test("GET comments", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    expect(response.status).toBe(200);
});

test("POST new post", async () => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1
    });
    expect(response.status).toBe(201);
    expect(response.data.title).toBe("foo");
    expect(response.data.body).toBe("bar");
    expect(response.data.userId).toBe(1);
});

test("DELETE user 1", async () => {
    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.status).toBe(200);
});