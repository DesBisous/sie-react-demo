import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CurriculumVitae extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>Curriculum Vitae  --- {this.props.location.id}</h1>
        )
    }
}

export default CurriculumVitae