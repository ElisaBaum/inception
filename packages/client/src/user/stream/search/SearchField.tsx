import React from 'react';
import {connect} from 'react-redux';

import {TextField} from '../../../shared/TextField/TextField';
import {DefaultIcon} from '../../../shared/Icon/Icon';
import {getQuery} from './searchSelectors';
import {processSearchQuery} from './searchActionCreators';

export const SearchField = connect(
    state => ({
        query: getQuery(state),
    }),
    {
        onSearch: processSearchQuery,
    },
)(
    ({query, onSearch}) => (
        <TextField placeholder={'Search'}
                   value={query}
                   onChange={e => onSearch(e.target.value)}
                   icon={(<DefaultIcon>{'search'}</DefaultIcon>)}/>
    )
);
