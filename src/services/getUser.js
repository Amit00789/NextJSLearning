export default async function User() {
    const user = await fetch("https://jsonplaceholder.typicode.com/users");
    return user.json();
}