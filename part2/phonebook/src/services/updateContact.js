import axios from 'axios';

const updateContact = (serverUrl, personObject, change, onChangeFunction) => {
    axios.put(serverUrl, personObject).then(() => {
        onChangeFunction(!change);
      });
}

export default updateContact;