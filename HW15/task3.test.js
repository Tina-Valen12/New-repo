const axios = require('axios');
jest.mock('axios');

//Це тести з моєї попередньої домашки, але з моками :)

test("GET posts (mocked)", async () => {
    const mockPosts = [{ id: 1, title: "Post №1" }, { id: 2, title: "Post №2" }];
    axios.get.mockResolvedValue({status: 200, data: mockPosts});

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    expect(response.status).toBe(200);
    expect(response.data.length).toBe(2);
    expect(response.data[0].title).toBe("Post №1", "Post №2");
});

test("GET post 1 (mocked)", async () => {
    const mockPost = { id: 1, title: "My new Post" };
    axios.get.mockResolvedValue({ status: 200, data: mockPost });

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.title).toBe("My new Post");
});

test("GET comments (mocked)", async () => {
    const mockComments = [
        { id: 1, body: "comment 1" },
        { id: 2, body: "comment 2" },
    ];
    axios.get.mockResolvedValue({status: 200, data: mockComments});

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");

    expect(response.status).toBe(200);
    expect(response.data.length).toBe(2);
});

test("POST new post (mocked)", async () => {
    const newPost = { title: "foo", body: "bar", userId: 1, id: 101 };
    axios.post.mockResolvedValue({status: 500, data: newPost});

     const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
    });

    expect(response.status).toBe(500);
    expect(response.data.title).toBe("foo");
    expect(response.data.body).toBe("bar");
    expect(response.data.userId).toBe(1);
});

test("DELETE post 1 (mocked)", async () => {
    axios.delete.mockResolvedValue({status: 404});

    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    
    expect(response.status).toBe(404);
});