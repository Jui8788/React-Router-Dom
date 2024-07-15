import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id, title, body } = post;

  return (
    <div>
      <h2>Post Details About: {id}</h2>
      <p>Title: {title}</p>
      <p>
        <small>Body: {body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
