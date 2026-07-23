// ===============================
// --------------- async/await----------
// ===============================

async function getPost(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const post = await response.json();
        console.log(`Post ${id}: ${post.title}`);
    } catch (error) {
        console.error(`Error for ID ${id}:`, error.message);
    }
}

// Test
getPost(1);
getPost(9999);


// ===============================
// ----------------- Promise.all()
// ===============================

async function getMultiplePosts() {
    try {
        const ids = [1, 2, 3];

        const responses = await Promise.all(
            ids.map(id =>
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            )
        );

        const posts = await Promise.all(
            responses.map(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                return response.json();
            })
        );

        console.log("\nTitles from Promise.all():");
        posts.forEach(post => console.log(post.title));

    } catch (error) {
        console.error(error.message);
    }
}

getMultiplePosts();


// ----------------- then()/catch()


function getPostThen(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(post => {
            console.log(`Then() Post ${id}: ${post.title}`);
        })
        .catch(error => {
            console.error(`Then() Error for ID ${id}:`, error.message);
        });
}

// Test
getPostThen(1);
getPostThen(9999);

// ----------------- Bonus: Network Error


async function networkErrorDemo() {
    try {
        await fetch("https://jsonplaceholder.typicodeX.com/posts/1");
    } catch (error) {
        console.log("Network Error:", error.message);
    }
}

networkErrorDemo();

