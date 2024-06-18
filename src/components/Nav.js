import { getSession, login, logout } from "../libs/auth.ts";

const Nav = async () => {
    const session = await getSession();
    return (
        <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default Nav;