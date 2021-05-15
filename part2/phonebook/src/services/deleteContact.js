import axios from 'axios';

const deleteContact = (requestUrl, change, onChangeFunction) => {
    axios.delete(requestUrl).then(() => {
        onChangeFunction(!change);
      });
}

export default deleteContact;