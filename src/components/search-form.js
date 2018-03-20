import React from 'react';
import { Input } from 'semantic-ui-react'

export default function SearchForm(props) {
    return (
        <div className="search-form">
            <form onSubmit={e => e.preventDefault()}>
                <Input 
                    fluid
                    aria-controls="person-count"
                    icon='search'
                    id="search"
                    name="search"
                    placeholder='Поиск: ФИО, дата рождения, номер документа...'
                    onChange={e => props.onChange(e.target.value)}
                />
            </form>
        </div>
    );
}
