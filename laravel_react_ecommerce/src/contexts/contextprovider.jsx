import { useContext } from 'react';
import {useState} from 'react';
import {createContext} from 'react';
import PropTypes from 'prop-types';


const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Niel',
       
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN') || null);

    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
    }
    else{
        localStorage.removeItem('ACCESS_TOKEN');
    }
    
}
return (
    <stateContext.Provider value={{
        user, 
        setUser, 
        token,
         setToken
    }}>
        {children}

        

        </stateContext.Provider>
)
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(stateContext);