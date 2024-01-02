const LoginForm = () => {
    return (
        <form>
            <label>
                Username
                <input type='text' name='name' />
            </label>
            <label>
                Password
                <input type='password' name='password' />
            </label>
            <button type='submit'>Log in</button>
        </form>
    )
};

export default LoginForm;