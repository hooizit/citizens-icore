import React, { Component } from 'react';

import SearchForm from './search-form';
import PersonCount from './person-count';
import PersonList from './person-list';


export default class LiveSearch extends Component {
    state = {searchTerm: ''}
    render() {
        const persons = this.props.persons.filter(person =>
            person.surname.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            ) ||
            person.firstname.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            ) ||
            person.dateBirth.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        );
        return (
            <div className="live-search">
                <SearchForm onChange={searchTerm => this.setState({searchTerm})} />
                <PersonCount count={persons.length} />
                <PersonList persons={persons} />
            </div>
        );
    }
}
