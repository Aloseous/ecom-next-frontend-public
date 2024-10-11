export const fetchUserData = async () => {
    try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch user data");
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};