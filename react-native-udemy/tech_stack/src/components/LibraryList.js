import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return null;
    }
}

const mapStateToProps = ({ libraries }) => {
    return { libraries }
};

export default connect(mapStateToProps)(LibraryList);