import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';

import {TextField} from '../shared/TextField/TextField';
import {DefaultIcon} from '../shared/Icon/Icon';
import {getQuery} from './searchSelectors';
import {processSearchQuery} from './searchActionCreators';

export const SearchField = () => {
    const dispatch = useDispatch();
    const query = useSelector(getQuery);
    const [value, setValue] = useState(query);
    const [debouncedCallback] = useDebouncedCallback(q => dispatch(processSearchQuery(q)), 500);

    return (
        <TextField placeholder={'Search'}
                   value={value}
                   onChange={e => {
                       const q = e.target.value;
                       debouncedCallback(q);
                       setValue(q);
                   }}
                   icon={(<DefaultIcon>{'search'}</DefaultIcon>)}/>
    );
};
