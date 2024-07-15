import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid brown",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h4>Post of User Id: {id}</h4>
      <p>Title: {title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show Detail</button>
      </Link>
      <button onClick={handleShowDetail}>Click to see details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
