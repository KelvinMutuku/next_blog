"use server"
export async function register(state, formData) { //adding the async function and "use server" fixes this error :Server Actions must be async functions
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    console.log(email);
    console.log(password);
    console.log(confirmPassword);
}