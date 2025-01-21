import PropTypes from 'prop-types';

export default function Friend({friend}){
    return(
        <div className='box'>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
        </div>
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};