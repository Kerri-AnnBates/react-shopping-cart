import React, {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [prodItem, setProdItem] = useState(initialValue);

    const setItem = value => {
        // setProdItem([...prodItem, value])
        localStorage.setItem(key, JSON.stringify(value));
        // setProdItem(value);
    }

    return [prodItem, setItem];
    
}