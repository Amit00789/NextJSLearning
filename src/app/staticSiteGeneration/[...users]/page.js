import User from "@/services/getUser";

export default async function Users({params}) {
    const users = User();
    const data = await users
    const user = data[params.users - 1]
    return(
        <div>
            <h1 style={{textAlign: 'center'}}> User Details </h1>
            <h4> Name : {user.name}</h4>
            <h4> UserName : {user.username}</h4>
            <h4> email : {user.email}</h4>
            <h4> phone : {user.phone}</h4>
        </div>
    )
}

export async function generateStaticParams(){
    const users = User();
    const data = await users
    return data.map(user => ({
        users : user.id.toString()
    }))
}