
export const GetRandomUser = ({data}) => {
    if (!data) {
        return <p>Loading...</p>;
    }

    const user = data.results
    return(
        <div>
            <button>Random User</button>
            {console.log(user)}
        </div>
    )
}