import { getSession } from "../libs/auth.ts";

const Nav = async () => {
    const session = await getSession();
    return (
        <div>
            {session ? (
                <pre>{JSON.stringify(session, null, 2)}</pre>
            ) : (
                <p>No session found</p>
            )}
        </div>
    )
}

export default Nav;