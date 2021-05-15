import axios from 'axios';

const addContact = (serverUrl, personObject, change, onChangeFunction) => {
    axios.post(serverUrl, personObject).then(response => {
        onChangeFunction(!change);
      });
}

export default addContact;