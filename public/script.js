const API_URL = "https://the-data-hub-delta.vercel.app/";

// Load all posts
async function loadPosts() {
    try {
        const res = await fetch(`${API_URL}/posts`);
        const posts = await res.json();

        const postsDiv = document.getElementById("posts");
        postsDiv.innerHTML = "";

        if (posts.length === 0) {
            postsDiv.innerHTML = "<p>No posts available.</p>";
            return;
        }

        posts.forEach(post => {
            postsDiv.innerHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                </div>
            `;
        });

    } catch (err) {
        console.error(err);
        alert("Failed to load posts");
    }
}

// Add new post
async function addPost() {

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("Please fill all fields");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });

        const data = await res.json();

        alert(data.message);

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";

        loadPosts();

    } catch (err) {
        console.error(err);
        alert("Failed to create post");
    }
}

loadPosts();