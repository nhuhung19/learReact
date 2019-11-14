import React from 'react';
import Name from './Name'


class Greeting extends React.Component {
    render() {
        return (
            <>
                <em>Hello</em> <Name />
            </>
        )
    }
}

export default Greeting