import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/post/postActions'

function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Post List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => {
            return(
              <div className="user-container">
              <p><span>Title:</span>  {user.title}</p>
              <p><span>Description:</span>  {user.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
