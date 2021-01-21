import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import phonebookActions from './../../redux/phonebook/phonebook-actions';


const Filter = ({filter, onFilter}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="filter_1">Find contacts by name</label><br/>
            <input type="text" name="filter" id="filter_1" value={filter}  onChange={onFilter} />
        </form>
    );
}

Filter.defaultProps = {
    filter:'',
    onFilter:()=>{}
}
Filter.propTypes = {
    filter:PropTypes.string.isRequired,
    onFilter:PropTypes.func
}

const mapStateToProps = state => ({
    filter:state.phonebook.filter
});

const  mapDispatchToprops = dispatch =>({
    onFilter: e => dispatch(phonebookActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToprops)(Filter)