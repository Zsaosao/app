import { connect } from 'react-redux';
function Home(props) {
    const handleDelete = (user) => {
        props.deleteUserRedux(user);
    };

    return (
        <div>
            <div>this is the page Home</div>
            {props.dataRedux.map((user) => (
                <div key={user.id}>
                    {user.id} {user.name}
                    <button onClick={() => handleDelete(user)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
// get data
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};
// create a function that allows firing action
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (user) =>
            //firing action
            dispatch({
                type: 'DELETE_USER_REDUX',
                payload: user,
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
