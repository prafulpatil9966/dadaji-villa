"use client"

import { useUsers } from '../../constants/user-data';
import Loader from '../components/global-ui/Loader/Loader';

const Users = () => {
    const { users, loading } = useUsers();
    console.log(users)
    if (loading) return <Loader />

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 mt-[90px] gap-4 p-4">
            {users.map((user) => (
                <div
                    key={user?.id}
                    className="card bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300"
                >
                    <img src={user?.image} alt="" />
                    <h2 className="text-lg font-semibold text-gray-800">
                        {user?.firstName} {user?.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">ID: {user?.id}</p>

                </div>
            ))}
        </div>

    )
}

export default Users
