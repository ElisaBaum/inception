import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';

import {TextField} from '../shared/TextField/TextField';
import {DefaultIcon} from '../shared/Icon/Icon';
import {getQuery} from './searchSelectors';
import {processSearchQuery} from './searchActionCreators';
import {State} from '../core/store';

export interface SearchFieldProps {
    query: string;
    onSearch(query: string);
}

export const SearchField = connect(
    (state: State) => ({
        query: getQuery(state),
    }),
    {
        onSearch: processSearchQuery,
    },
)(({query, onSearch}: SearchFieldProps) => {
    const [value, setValue] = useState(query);
    const [debouncedCallback] = useDebouncedCallback(onSearch, 500);

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
});
