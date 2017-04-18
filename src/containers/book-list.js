// dumb component (because it haven't any direct connection to Redux)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item" >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        // console.log(this.props.asd) // = 123
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// this function link the container between react & redux
function mapStateToProps(state) {
    // Whatever is returned will shop up as props
    // inside of BookList
    return {
        //asd: 123
        books: state.books
    };
}

// Anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be
    // be pass to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs
// to know about this new dispatch methode, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)