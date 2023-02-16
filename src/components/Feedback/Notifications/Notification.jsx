import PropTypes from 'prop-types';

export default function Notification({ messege }) {
  return <p>{messege}</p>;
}

Notification.propTypes = {
  messege: PropTypes.string,
};
