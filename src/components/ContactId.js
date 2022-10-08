import axios from 'axios';
import { useEffect, useState } from 'react';
import { withRouter } from '~/router/withrouter';
function ContactId(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const id = props.router.params.id;
            const dataUser = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(dataUser);
        };
        fetchData();
    }, []);
    const handleBack = () => {
        props.router.navigate(`/contact`);
    };
    return (
        <div>
            {user && user.data && user.data.data && (
                <div>
                    <img src={user.data.data.avatar} />
                    <span>
                        FirstName: {user.data.data.first_name} LastName:{user.data.data.last_name} Email:
                        {user.data.data.email}
                    </span>
                    <button onClick={handleBack}>Back</button>
                </div>
            )}
        </div>
    );
}

export default withRouter(ContactId);
